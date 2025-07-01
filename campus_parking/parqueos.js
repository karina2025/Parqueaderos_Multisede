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