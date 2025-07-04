
# Sistema de Gestión de Parqueaderos Multisede - Campus Parking

## 1. Introducción al Proyecto

Este proyecto aborda la migración de la gestión de parqueaderos de Campus Parking, una empresa con múltiples sedes, desde un sistema basado en hojas de cálculo locales a una **base de datos NoSQL con MongoDB**. El objetivo principal es centralizar la información, eliminar la duplicación de datos, reducir errores y facilitar el acceso unificado a los datos. Como desarrollador backend, he diseñado e implementado la solución que incluye la estructura de la base de datos, el poblamiento con datos de prueba realistas, la implementación de consultas analíticas, la gestión de seguridad con control de roles y la demostración del uso de transacciones.

## 2. Justificación del Uso de MongoDB

La elección de MongoDB, una base de datos NoSQL orientada a documentos, para este proyecto se justifica por varias razones clave:

* **Flexibilidad del Esquema**: Campus Parking requiere un sistema adaptable a diferentes tipos de vehículos y configuraciones de sedes. MongoDB permite esquemas dinámicos, lo que facilita la adición de nuevos atributos o tipos de vehículos sin requerir cambios complejos en la estructura de la base de datos, a diferencia de una base de datos relacional.
* **Escalabilidad Horizontal**: A medida que Campus Parking crezca y añada más sedes o incremente el volumen de operaciones, MongoDB ofrece una excelente escalabilidad horizontal (sharding) para manejar grandes volúmenes de datos y tráfico de usuarios.
* **Rendimiento con Datos No Estructurados**: La naturaleza de los datos de parqueos, que incluyen información de vehículos, usuarios, sedes y registros de entrada/salida, se adapta bien al modelo de documentos de MongoDB, permitiendo agrupar la información relacionada para consultas más rápidas.
* **Desarrollo Rápido**: El formato BSON (JSON binario) de MongoDB se alinea perfectamente con JavaScript, lo que acelera el desarrollo de aplicaciones web y APIs al reducir la necesidad de mapeo objeto-relacional.
* **Agregaciones Potentes**: MongoDB ofrece un potente framework de agregación que facilita la realización de consultas analíticas complejas y la generación de reportes, como la ocupación de zonas o los ingresos por sede.
* **Transacciones Multidocumento**: A partir de MongoDB 4.0, se introdujeron las transacciones ACID para conjuntos de réplicas, lo que garantiza la integridad de los datos en operaciones que involucran múltiples documentos o colecciones, como el registro de un parqueo y la actualización de la capacidad de una zona.

## 3. Diseño del Modelo de Datos

El modelo de datos se ha diseñado para reflejar las entidades clave del sistema de parqueaderos, priorizando la eficiencia y la integridad de los datos mediante el uso de esquemas de validación `$jsonSchema` y la elección estratégica entre referencias y embebidos.

### Colecciones Creadas

Se han creado las siguientes colecciones:

* **`usuarios`**: Almacena la información de los usuarios del sistema (Administradores, Empleados de Sede, Clientes).
* **`vehiculos`**: Contiene los detalles de los vehículos registrados en el sistema, vinculados a los clientes.
* **`sedes`**: Representa cada ubicación de parqueadero, incluyendo su nombre, ciudad y dirección.
* **`zonas`**: Define las diferentes áreas de estacionamiento dentro de cada sede, con su capacidad, tipos de vehículos permitidos y tarifas.
* **`parqueos`**: Registra cada evento de ingreso y salida de un vehículo, incluyendo la sede, zona, horas y costo.

### Decisiones de Uso de Referencias o Embebidos

Se ha optado principalmente por un **modelo de datos relacional con referencias** entre colecciones. Esta decisión se basa en las siguientes consideraciones:

* **`usuarios` y `vehiculos`**: Los vehículos se referencian a los clientes (usuarios con `rol: 'cliente'`). Un cliente puede tener múltiples vehículos, pero un vehículo pertenece a un solo cliente. Esta relación de uno a muchos se maneja eficientemente con referencias (`cliente_id` en `vehiculos`).
* **`sedes` y `zonas`**: Las zonas se referencian a las sedes (`sede_id` en `zonas`). Una sede puede tener múltiples zonas. Si bien se podría haber embebido las zonas dentro de la colección `sedes`, se optó por una colección separada para facilitar las consultas y actualizaciones específicas de zonas, especialmente para reportes de ocupación y tarifas.
* **`parqueos`**: Esta colección referencia a `vehiculos`, `sedes` y `zonas`. Un parqueo es un evento que involucra estas tres entidades. La referencia es la opción más lógica aquí para evitar la duplicación masiva de datos y permitir la actualización independiente de las entidades.
* **Datos Embebidos**: Se utilizan datos embebidos para información que está intrínsecamente ligada y que no necesita ser consultada o actualizada de forma independiente, como los `tipos_vehiculos_permitidos` y `tarifas` dentro de la colección `zonas`. Esto mejora el rendimiento de lectura al obtener toda la información relevante de una zona en una sola consulta.

### Validaciones `$jsonSchema`

Cada colección ha sido diseñada con un `$jsonSchema` completo para asegurar la integridad y la consistencia de los datos.

#### `usuarios`

```javascript
// db_config.js
db.createCollection('usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre', 'apellido', 'email', 'cedula', 'rol'],
            properties: {
                nombre: { bsonType: 'string', description: 'Nombre del usuario' },
                apellido: { bsonType: 'string', description: 'Apellido del usuario' },
                email: {
                    bsonType: 'string',
                    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
                    description: 'Email del usuario, debe ser único'
                },
                cedula: { bsonType: 'string', description: 'Cédula de identidad del usuario, debe ser única' },
                rol: {
                    bsonType: 'string',
                    enum: ['administrador', 'empleado', 'cliente'],
                    description: 'Rol del usuario en el sistema'
                },
                sede_id: {
                    bsonType: 'objectId',
                    description: 'ID de la sede a la que pertenece el empleado (opcional para clientes y administradores)'
                }
            }
        }
    }
});
