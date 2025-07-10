
// mostrar cantidad de paruqeos realizados por tipo de vehiculo en cada sede.
db.parqueos.aggregate([
    {
        $match: {
            activo: true
        }
    },
    {
        $group: {
          _id: { sede: "$sede_id", tipo_vehiculo: "$tipo_vehiculo_parqueado" },
          cantidad: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "zonas",
          localField: "zona_id",
          foreignField: "_id",
          as: "info_zona"
        }
      },
      {
        $unwind: "$info_zona"
      },
      {
        $lookup: {
            from: "sedes",
            localField:" sedes_id",
            Foreingfield: "_id",
            as: " info_sede"
        }
    },
    {
        $unwind: "$info_sede"
  },
  {
    $group: {
      _id: "$info_sede.nombre",
      vehiculos_parqueados: {
        $push: {
          placa: "$info_vehiculo.placa",
          tipo_vehiculo: "$tipo_vehiculo_parqueado",
          zona: "$info_zona.nombre",
          hora_entrada: "$hora_entrada"
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      vehiculos_parqueados: 1
    }
  }
])

// listar los clientes que han utilizado mas de 5 veces el parqueadero en el ultimo mes.

db.parqueos.aggregate([
    {
        $group: {
            _id: {sede: "$sede_id", tipo_vehiculo: "$tipo_vehiculo_parqueado"},
            cantidad:{ $sum: 5}
        }
    },
    {
        $sort: { "_id.sede":1, cantidad: -1}
    },
    {
        $group: {
            _id: "_id.sede",
            tipo_mas_utilizado: { $first : "$_id.tipo_vehiculo"},
            cantidad_tipo_mas_utilizado: { $first: "$cantidad"}
        }
    },
    {
        $lookup: {
            from: "usuarios",
            localField: "_id",
            foreignField: "_id",
            as: "info_cliente"
        }
    },
    {
        $unwind: "$info_cliente"
    },
    {
        $project: {
            _id: 0,
            cliente: "$info_cliente.nombre",
            tipo_vehiculo_mas_utilizado: "$tipo_mas_utilizado",
            cantidad: "$cantidad_tipo_mas_frecuentes"
        }
    }
])

//calcular el promedio de tiempo de parqueo por tipo de vehiculo en una sede especifica.

db.parqueos.aggregate([
    {
        $group: {
            _id: "$vehiculo_id",
            cantidad_parqueos: { $sum: 1}
        }
    },
    {
        $sort: { cantidad_parqueos: 1}
    },
    {
        $lookup:{
            form: "usuarios",
            localfield: "_id",
            foreignField: " _id",
            as: "info_cliente"
        }
    },
    {
        $project: {
            _id:0,
            cliente: { $concat: ["$info_cliente.nombre","","$info_cliente.apellido"] },
            cantidad_parqueos: 1
        }
    }
])