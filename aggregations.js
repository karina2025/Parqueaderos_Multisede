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
