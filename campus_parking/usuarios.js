usecampus_parking;

db.createColletion("usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "cedula", "nombre", "apellido", "email", "telefono", "tipo_usuario"],
            properties: {
                cedula: {
                    bsonType: "string",
                    description: "la cedula debe ser una string y es obligatoria"
                },
                nombre: {
                    bsonType: "string",
                    description: "el nombre debe ser un string y es obligatoria"
                },
                apellido: {
                    bsonType: "string",
                    description: " el apellido debe ser un string y es obligatoria"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    description: " email debe tener un formato valido"
                },
                telefono: {
                    bsonType: " string",
                    description: " el telefono debe ser un string"
                },
                tipo_usuario: {
                    enum: ["administrador", "empleado", "cliente"],
                    description: " tipo de usuario debe ser: administrador, empleado o cliente"
                },
                sede_asignada : {
                    bsonType: " string",
                    description: " la sede asignada ( obligatorio para empleados)"
                },
                fecha_registro: {
                    bsonType: " date",
                    description: " fecha de registro"
                }
            }
        }
    }
}

)

// Verificar creación
db.usuarios.getIndexes()

// creacion de indixes para usuarios

// Índice único para cédula
db.usuarios.createIndex({ "cedula": 1 }, { unique: true })

// Índice único para email
db.usuarios.createIndex({ "email": 1 }, { unique: true })

// Índice compuesto para tipo y sede
db.usuarios.createIndex({ "tipo_usuario": 1, "sede_asignada": 1 })

// Verificar índices creados
db.usuarios.getIndexes()
