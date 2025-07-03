// ¿Cuántos parqueos se registraron por sede en el último mes?

db.parqueos.aggregate([
    {
        $match: {
            hora_entrada: { $gte: new Date(new Date().setMonth(new Date().getMonth()-1))}
        }
    },
    {
        $group: {
            _id: "$sede_id",
            total_parqueos : { $sum: 1}
        }
    },
    {
        $lookup: {
            from: "sedes",
            localField: "_id",
            foreignField: "_id",
            as: "info_sede"
        }
    },
    {
        $unwind: "$info_sede"
    },
    {
        $project: {
            _id: 0,
            sede: "$info_sede.nombre",
            total_parqueos: 1
        }
    }
])

  // 2. ¿Cuáles son las zonas más ocupadas en cada sede?

  db.parqueos.aggregate([
    {
      $match: {
        activo: true // Solo parqueos activos
      }
    },
    {
      $group: {
        _id: "$zona_id",
        vehiculos_actuales: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "zonas",
        localField: "_id",
        foreignField: "_id",
        as: "info_zona"
      }
    },
    {
      $unwind: "$info_zona"
    },
    {
      $project: {
        _id: 0,
        zona_nombre: "$info_zona.nombre",
        sede_id: "$info_zona.sede_id",
        vehiculos_actuales: 1,
        capacidad_maxima: "$info_zona.capacidad_maxima",
        porcentaje_ocupacion: { $multiply: [{ $divide: ["$vehiculos_actuales", "$info_zona.capacidad_maxima"] }, 100] }
      }
    },
    {
      $lookup: {
        from: "sedes",
        localField: "sede_id",
        foreignField: "_id",
        as: "info_sede"
      }
    },
    {
      $unwind: "$info_sede"
    },
    {
      $project: {
        sede: "$info_sede.nombre",
        zona: "$zona_nombre",
        vehiculos_actuales: 1,
        capacidad_maxima: 1,
        porcentaje_ocupacion: { $round: ["$porcentaje_ocupacion", 2] }
      }
    },
    {
      $sort: { porcentaje_ocupacion: -1 }
    }
  ])


// 3. ¿Cuál es el ingreso total generado por parqueo en cada sede?


  db.parqueos.aggregate([
    {
      $match: {
        costo_total: { $ne: null } // Solo parqueos finalizados
      }
    },
    {
      $group: {
        _id: "$sede_id",
        ingreso_total: { $sum: "$costo_total" }
      }
    },
    {
      $lookup: {
        from: "sedes",
        localField: "_id",
        foreignField: "_id",
        as: "info_sede"
      }
    },
    {
      $unwind: "$info_sede"
    },
    {
      $project: {
        _id: 0,
        sede: "$info_sede.nombre",
        ingreso_total: { $round: ["$ingreso_total", 2] }
      }
    }
  ])

   // 4. ¿Qué cliente ha usado más veces el parqueadero?

  db.parqueos.aggregate([
    {
      $group: {
        _id: "$cliente_id",
        cantidad_parqueos: { $sum: 1 }
      }
    },
    {
      $sort: { cantidad_parqueos: -1 }
    },
    {
      $limit: 1 // Solo el cliente con más parqueos
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
        cliente: { $concat: ["$info_cliente.nombre", " ", "$info_cliente.apellido"] },
        cantidad_parqueos: 1
      }
    }
  ]) // 4. ¿Qué cliente ha usado más veces el parqueadero?

  db.parqueos.aggregate([
    {
      $group: {
        _id: "$cliente_id",
        cantidad_parqueos: { $sum: 1 }
      }
    },
    {
      $sort: { cantidad_parqueos: -1 }
    },
    {
      $limit: 1 // Solo el cliente con más parqueos
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
        cliente: { $concat: ["$info_cliente.nombre", " ", "$info_cliente.apellido"] },
        cantidad_parqueos: 1
      }
    }
  ])

  // 5. ¿Qué tipo de vehículo es más frecuente por sede?

  db.parqueos.aggregate([
    {
      $group: {
        _id: { sede: "$sede_id", tipo_vehiculo: "$tipo_vehiculo_parqueado" },
        cantidad: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.sede": 1, cantidad: -1 }
    },
    {
      $group: {
        _id: "$_id.sede",
        tipo_mas_frecuente: { $first: "$_id.tipo_vehiculo" },
        cantidad_tipo_mas_frecuente: { $first: "$cantidad" }
      }
    },
    {
      $lookup: {
        from: "sedes",
        localField: "_id",
        foreignField: "_id",
        as: "info_sede"
      }
    },
    {
      $unwind: "$info_sede"
    },
    {
      $project: {
        _id: 0,
        sede: "$info_sede.nombre",
        tipo_vehiculo_mas_frecuente: "$tipo_mas_frecuente",
        cantidad: "$cantidad_tipo_mas_frecuente"
      }
    }
  ])

   // 6. Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).

  const clienteId = new ObjectId("ID_DEL_CLIENTE_AQUI"); // Reemplazar con un ID de cliente real

  db.parqueos.aggregate([
  {
    $match: {
      cliente_id: clienteId
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "info_sede"
    }
  },
  {
    $unwind: "$info_sede"
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
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "info_vehiculo"
    }
  },
  {
    $unwind: "$info_vehiculo"
  },
  {
    $project: {
      _id: 0,
      fecha_entrada: "$hora_entrada",
      fecha_salida: "$hora_salida",
      sede: "$info_sede.nombre",
      zona: "$info_zona.nombre",
      tipo_vehiculo: "$tipo_vehiculo_parqueado",
      placa_vehiculo: "$info_vehiculo.placa",
      tiempo_parqueo_minutos: { $ifNull: ["$tiempo_parqueo_minutos", "Activo"] },
      costo_total: { $ifNull: ["$costo_total", "Pendiente"] }
    }
  },
  {
    $sort: { fecha_entrada: -1 }
  }
])

// 7. Mostrar los vehículos parqueados actualmente en cada sede.

db.parqueos.aggregate([
  {
    $match: {
      activo: true
    }
  },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "info_vehiculo"
    }
  },
  {
    $unwind: "$info_vehiculo"
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
      localField: "sede_id",
      foreignField: "_id",
      as: "info_sede"
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