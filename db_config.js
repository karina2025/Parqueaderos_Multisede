// Creacion de colecciones con $jsonSchema 
use("parking")
// parqueos

db.createColletion("parqueos",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["codigo_parqueo", "placa_vehiculo", "sede_codigo", "zona_codigo", "fecha_entrada", "hora_entrada"],
            properties: {
                codigo_parqueo:{
                    bsonType:"string",
                    description: "codigo unico del parqueo"
                },
                placa_vehiculo:{
                    bsonType: "string",
                    description: "placa del vehiculo"
                },
                sede_codigo:{
                    bsonType: "string",
                    description: "codigo de la sede"
                },
                zona_codigo:{
                    bsonType: "string",
                    description: "codigo de la zona"
                },
                fecha_entrada:{
                    bsonType: "date",
                    description: "fecha de entrada "
                },
                hora_entrada:{
                    bsonType: "string",
                    description:"hora de entrada"
                },
                fecha_salida:{
                    bsonType:["date", "null"],
                    description: "fecha de salida(null si esta activo"
                },
                hora_salida:{
                    bsonType:["string", "null"],
                    minimum:0,
                    description: "tiempo total en minutos"
                },
                costo_total: {
                    bsonType: ["double", "null"],
                    minimum:0,
                    description: "costo total calculado"
                },
                estado: {
                    enum: [ "activo", "finalizado"],
                    description: "estado del parqueo"
                }
            }
        }
    }
})


// Crear índices para parqueos
db.parqueos.createIndex({ "codigo_parqueo": 1 }, { unique: true })
db.parqueos.createIndex({ "placa_vehiculo": 1 })
db.parqueos.createIndex({ "sede_codigo": 1, "zona_codigo": 1 })
db.parqueos.createIndex({ "fecha_entrada": 1 })
db.parqueos.createIndex({ "estado": 1 }) 


// sedes

db.createColletion( "sedes",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["codigo_sede", "nombre", "ciudad", "direccion", "telefono"],
            properties: {
                codigo_sede: {
                    bsonType: "string",
                    description: "codigo de sede unico"
                },
                nombre: {
                    bsonType: "string",
                    description: "nombre de la sede"
                },
                ciudad: {
                    bsonType: "string",
                    description: " ciudad donde esta ubicada"
                },
                direccion: {
                    bsonType: "string",
                    description: "direccion completa "
                },
                telefono: {
                    bsonType: "string", 
                    description: "telefono de contacto"
                },
                horario_apertura: {
                    bsonType: "string",
                    description: "hora de apertura"
                },
                horario_cierre : {
                    bsonType: "string",
                    description: "hora de cierre"
                }
            }
        }
    }
}

)


// Crear índices para sedes
db.sedes.createIndex({ "codigo_sede": 1 }, { unique: true })
db.sedes.createIndex({ "ciudad": 1 })




// usuarios

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




// vehiculos

db.createColletion( "vehiculos",{
    validator: {
        $jsonSchema: {
            bsontype: "object",
            required: [ "placa", "tipo_vehiculo", "marca", "modelo","propietario_cedula"],
            propierties: {
                placa: {
                    bsontype: "string",
                    description: "placa deber ser string y es requerida"
                },
                tipo_vehiculo: {
                    enum: [ "carro", "moto", "bicicleta", "camion"],
                    description: "tipo deber ser: carro, moto, bicicleta o camion"
                },
                marca: {
                    bsontype: "string",
                    description: "marca deber ser string"
                },
                color: {
                    bsontype: "string",
                    description: "color del vehiculo"
                },
                propietario_cedula:{
                    bsontype: "string",
                    description: "cedula del propietario"
                },
                fecha_registro: {
                    bsontype: "date",
                    description: "fecha de registro"
                }
            }
        }
    }
}

)

// Crear índices para vehículos
db.vehiculos.createIndex({ "placa": 1 }, { unique: true })
db.vehiculos.createIndex({ "propietario_cedula": 1 })
db.vehiculos.createIndex({ "tipo_vehiculo": 1 })

// zonas

db.createColletion("zonas",{
    validator: {
        $jsonSchema:{
            bsontype: "object",
            required: [ "codigo_zona", "sede_codigo", "nombre", "capacidad_maxima", "cupos_disponibles", "tipos_vehiculos_permitidos", "tarifa_por_hora"],
            properties:{
                codigo_zona:{
                    bsontype: "string",
                    description: "codigo unico de la zona"
                },
                sede_codigo:{
                    bsontype: "string",
                    description: " codigo de la sede que pertenece"
                },
                nombre: {
                    bsontype: "string",
                    description: "nombre de la zona"
                },
                capacidad_maxima:{
                    bsontype: "int",
                    minimum: 1,
                    description: " capacidad maxima de vehiculos"
                },
                cupos_disponibles:{
                    bsontype: "int",
                    minimum: 0, 
                    description: "cupos actualmente disponibles"
                },
                tipos_vehiculos_permitidos:{
                    bsontype: "array",
                    items: {
                        enum: [ "carro", "moto", "bicicleta", "camion"]
                    },
                    description: "tipos de vehiculos permitidos"
                },
                tarifa_por_hora: {
                    bsontype: "object",
                    properties: {
                        carro:{bsontype: "double", minimum: 0},
                        moto:{bsontype: "double", minimun: 0},
                        bicicleta:{bsontype:"double",minimun:0},
                        camion:{bsontype:"double",minimum:0}
                    }
                }
            }
        }
    }
    })
    

    // Crear índices para zonas
db.zonas.createIndex({ "codigo_zona": 1 }, { unique: true })
db.zonas.createIndex({ "sede_codigo": 1 })
db.zonas.createIndex({ "sede_codigo": 1, "cupos_disponibles": 1 })