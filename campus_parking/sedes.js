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