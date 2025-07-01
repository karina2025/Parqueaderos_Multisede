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