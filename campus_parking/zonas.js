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
