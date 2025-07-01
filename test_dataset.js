// Poblamiento de la base con datos de prueba realistas


// 3 SEDES DIFERENTES

db.sedes.insertMany([
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        nombre: "Sede Principal - Barranquilla",
        ciudad: "Barranquilla",
        direccion: "Carrera 53 # 70-150, Alto Prado",
        telefono: "3012345678",
        capacidad_total: 300
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        nombre: "Sede Poblado - Medellín",
        ciudad: "Medellín",
        direccion: "Calle 10 # 36-21, El Poblado",
        telefono: "3118765432",
        capacidad_total: 220
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        nombre: "Sede Chapinero - Bogotá",
        ciudad: "Bogotá",
        direccion: "Carrera 7 # 63-10, Chapinero",
        telefono: "3223456789",
        capacidad_total: 280
    }
])

//  5 zonas por sede, con cupos, precios y tipos de vehículo permitidos.

db.zonas.insertMany([
    // Zonas para Sede Principal - Barranquilla (ID: 66838b97c0f823a0d9b6e4d4)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f0"),
        nombre: "Zona Techada - Carros Grandes",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        capacidad_maxima: 90,
        cupos_disponibles: 85,
        tarifa_por_minuto: { carro: 200, camioneta: 280 },
        tipos_vehiculo_permitidos: ["carro", "camioneta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f1"),
        nombre: "Zona Externa - Motos y Bicicletas",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        capacidad_maxima: 70,
        cupos_disponibles: 65,
        tarifa_por_minuto: { moto: 120, bicicleta: 60 },
        tipos_vehiculo_permitidos: ["moto", "bicicleta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f2"),
        nombre: "Zona Acceso Rápido - Carros Pequeños",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        capacidad_maxima: 50,
        cupos_disponibles: 45,
        tarifa_por_minuto: { carro: 180 },
        tipos_vehiculo_permitidos: ["carro"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f3"),
        nombre: "Zona Nocturna - Mixta",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        capacidad_maxima: 30,
        cupos_disponibles: 28,
        tarifa_por_minuto: { carro: 190, moto: 100 },
        tipos_vehiculo_permitidos: ["carro", "moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f4"),
        nombre: "Zona de Carga Especial",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"),
        capacidad_maxima: 15,
        cupos_disponibles: 10,
        tarifa_por_minuto: { camion: 350, furgon: 300 },
        tipos_vehiculo_permitidos: ["camion", "furgon"],
        estado: "activa"
    },

    // Zonas para Sede Poblado - Medellín (ID: 66838b97c0f823a0d9b6e4d5)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f5"),
        nombre: "Zona Preferencial - SUVs",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        capacidad_maxima: 60,
        cupos_disponibles: 55,
        tarifa_por_minuto: { camioneta: 220 },
        tipos_vehiculo_permitidos: ["camioneta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f6"),
        nombre: "Zona General - Todos los Vehículos",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        capacidad_maxima: 100,
        cupos_disponibles: 90,
        tarifa_por_minuto: { carro: 170, moto: 110, bicicleta: 55 },
        tipos_vehiculo_permitidos: ["carro", "moto", "bicicleta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f7"),
        nombre: "Zona Subterránea - Carros",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        capacidad_maxima: 80,
        cupos_disponibles: 75,
        tarifa_por_minuto: { carro: 190 },
        tipos_vehiculo_permitidos: ["carro"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f8"),
        nombre: "Zona Exclusiva Motos",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        capacidad_maxima: 40,
        cupos_disponibles: 38,
        tarifa_por_minuto: { moto: 105 },
        tipos_vehiculo_permitidos: ["moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4f9"),
        nombre: "Zona VIP Plus",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"),
        capacidad_maxima: 20,
        cupos_disponibles: 18,
        tarifa_por_minuto: { carro: 260 },
        tipos_vehiculo_permitidos: ["carro"],
        estado: "activa"
    },

    // Zonas para Sede Chapinero - Bogotá (ID: 66838b97c0f823a0d9b6e4d6)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4fa"),
        nombre: "Zona Principal - Sedanes",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        capacidad_maxima: 100,
        cupos_disponibles: 95,
        tarifa_por_minuto: { carro: 175, camioneta: 210 },
        tipos_vehiculo_permitidos: ["carro", "camioneta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4fb"),
        nombre: "Zona Lateral - Motocicletas",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        capacidad_maxima: 70,
        cupos_disponibles: 68,
        tarifa_por_minuto: { moto: 95 },
        tipos_vehiculo_permitidos: ["moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4fc"),
        nombre: "Zona Convenio - Empresas",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        capacidad_maxima: 40,
        cupos_disponibles: 35,
        tarifa_por_minuto: { carro: 160, camioneta: 200 },
        tipos_vehiculo_permitidos: ["carro", "camioneta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4fd"),
        nombre: "Zona Patio - Temporal",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        capacidad_maxima: 50,
        cupos_disponibles: 48,
        tarifa_por_minuto: { carro: 145, moto: 75 },
        tipos_vehiculo_permitidos: ["carro", "moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4fe"),
        nombre: "Zona Carga Express",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"),
        capacidad_maxima: 10,
        cupos_disponibles: 7,
        tarifa_por_minuto: { furgon: 320, camion: 400 },
        tipos_vehiculo_permitidos: ["furgon", "camion"],
        estado: "activa"
    }
])

// 10 empleados distribuidos entre las sedes.

db.usuarios.insertMany([

    // --- Administradores (3) ---
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b01"),
        nombre: "Sofía",
        apellido: "Martínez",
        email: "sofia.admin@parkingapp.com",
        cedula: "1100110011",
        telefono: "3151112233",
        tipo_usuario: "Administrador",
        password: "admin1" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b02"),
        nombre: "Alejandro",
        apellido: "González",
        email: "alejandro.admin@parkingapp.com",
        cedula: "1100220022",
        telefono: "3164445566",
        tipo_usuario: "Administrador",
        password: "admin2" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b03"),
        nombre: "Valeria",
        apellido: "Rodríguez",
        email: "valeria.admin@parkingapp.com",
        cedula: "1100330033",
        telefono: "3177778899",
        tipo_usuario: "Administrador",
        password: "admin3" // Shortened password
    },

    // --- Empleados de Sede (7) ---
    // Empleados para Sede Principal - Barranquilla (ID: 66838b97c0f823a0d9b6e4d4)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b04"),
        nombre: "Carlos",
        apellido: "Gutiérrez",
        email: "carlos.barranquilla@parkingapp.com",
        cedula: "1100440044",
        telefono: "3181234567",
        tipo_usuario: "Empleado de Sede",
        password: "emp1" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b05"),
        nombre: "Andrea",
        apellido: "Díaz",
        email: "andrea.barranquilla@parkingapp.com",
        cedula: "1100550055",
        telefono: "3198765432",
        tipo_usuario: "Empleado de Sede",
        password: "emp2" // Shortened password
    },

    // Empleados para Sede Poblado - Medellín (ID: 66838b97c0f823a0d9b6e4d5)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b06"),
        nombre: "Ricardo",
        apellido: "Pérez",
        email: "ricardo.medellin@parkingapp.com",
        cedula: "1100660066",
        telefono: "3201122334",
        tipo_usuario: "Empleado de Sede",
        password: "emp3" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b07"),
        nombre: "Paula",
        apellido: "Sánchez",
        email: "paula.medellin@parkingapp.com",
        cedula: "1100770077",
        telefono: "3214455667",
        tipo_usuario: "Empleado de Sede",
        password: "emp4" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b08"),
        nombre: "Javier",
        apellido: "Ramírez",
        email: "javier.medellin@parkingapp.com",
        cedula: "1100880088",
        telefono: "3227788990",
        tipo_usuario: "Empleado de Sede",
        password: "emp5" // Shortened password
    },

    // Empleados para Sede Chapinero - Bogotá (ID: 66838b97c0f823a0d9b6e4d6)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b09"),
        nombre: "Mónica",
        apellido: "Castro",
        email: "monica.bogota@parkingapp.com",
        cedula: "1100990099",
        telefono: "3231010101",
        tipo_usuario: "Empleado de Sede",
        password: "emp6" // Shortened password
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1b0a"),
        nombre: "Fernando",
        apellido: "Herrera",
        email: "fernando.bogota@parkingapp.com",
        cedula: "1101010101",
        telefono: "3242020202",
        tipo_usuario: "Empleado de Sede",
        password: "emp7" // Shortened password
    },
    
    // --- Clientes (15) ---
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d10"),
        nombre: "Luisa",
        apellido: "García",
        email: "luisa.garcia@email.com",
        cedula: "1112223334",
        telefono: "3009988776",
        tipo_usuario: "Cliente",
        password: "cli1" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d11"),
        nombre: "Pedro",
        apellido: "López",
        email: "pedro.lopez@email.com",
        cedula: "1113334445",
        telefono: "3018877665",
        tipo_usuario: "Cliente",
        password: "cli2" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d12"),
        nombre: "Ana",
        apellido: "Fernández",
        email: "ana.fernandez@email.com",
        cedula: "1114445556",
        telefono: "3027766554",
        tipo_usuario: "Cliente",
        password: "cli3" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d13"),
        nombre: "Juan",
        apellido: "Ruiz",
        email: "juan.ruiz@email.com",
        cedula: "1115556667",
        telefono: "3036655443",
        tipo_usuario: "Cliente",
        password: "cli4" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d14"),
        nombre: "María",
        apellido: "Jiménez",
        email: "maria.jimenez@email.com",
        cedula: "1116667778",
        telefono: "3045544332",
        tipo_usuario: "Cliente",
        password: "cli5" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d15"),
        nombre: "Diego",
        apellido: "Moreno",
        email: "diego.moreno@email.com",
        cedula: "1117778889",
        telefono: "3054433221",
        tipo_usuario: "Cliente",
        password: "cli6" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d16"),
        nombre: "Sara",
        apellido: "Gil",
        email: "sara.gil@email.com",
        cedula: "1118889990",
        telefono: "3063322110",
        tipo_usuario: "Cliente",
        password: "cli7" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d17"),
        nombre: "Felipe",
        apellido: "Cruz",
        email: "felipe.cruz@email.com",
        cedula: "1119990001",
        telefono: "3072211009",
        tipo_usuario: "Cliente",
        password: "cli8" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d18"),
        nombre: "Laura",
        apellido: "Vargas",
        email: "laura.vargas@email.com",
        cedula: "1120001112",
        telefono: "3081100998",
        tipo_usuario: "Cliente",
        password: "cli9" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d19"),
        nombre: "Sebastián",
        apellido: "Mendoza",
        email: "sebastian.mendoza@email.com",
        cedula: "1121112223",
        telefono: "3090099887",
        tipo_usuario: "Cliente",
        password: "cli10" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d1a"),
        nombre: "Carolina",
        apellido: "Guerrero",
        email: "carolina.guerrero@email.com",
        cedula: "1122223334",
        telefono: "3109988776",
        tipo_usuario: "Cliente",
        password: "cli11" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d1b"),
        nombre: "Daniel",
        apellido: "Navarro",
        email: "daniel.navarro@email.com",
        cedula: "1123334445",
        telefono: "3118877665",
        tipo_usuario: "Cliente",
        password: "cli12" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d1c"),
        nombre: "Emilia",
        apellido: "Ramos",
        email: "emilia.ramos@email.com",
        cedula: "1124445556",
        telefono: "3127766554",
        tipo_usuario: "Cliente",
        password: "cli13" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d1d"),
        nombre: "Jorge",
        apellido: "Delgado",
        email: "jorge.delgado@email.com",
        cedula: "1125556667",
        telefono: "3136655443",
        tipo_usuario: "Cliente",
        password: "cli14" // Shortened password
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d1e"),
        nombre: "Fernanda",
        apellido: "Ortega",
        email: "fernanda.ortega@email.com",
        cedula: "1126667778",
        telefono: "3145544332",
        tipo_usuario: "Cliente",
        password: "cli15" // Shortened password
    }
])

// 30 vehículos, de al menos 4 tipos diferentes, asignados a los clientes.

db.vehiculos.insertMany([
    // --- Carros (15 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01101"),
        placa: "RCD987",
        tipo_vehiculo: "carro",
        marca: "Kia",
        modelo: "Seltos",
        color: "Azul Profundo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d10") // Luisa García
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01102"),
        placa: "TRW456",
        tipo_vehiculo: "carro",
        marca: "Hyundai",
        modelo: "Creta",
        color: "Blanco Puro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d11") // Pedro López
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01103"),
        placa: "BNS101",
        tipo_vehiculo: "carro",
        marca: "Chevrolet",
        modelo: "Equinox",
        color: "Rojo Intenso",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d12") // Ana Fernández
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01104"),
        placa: "GHS234",
        tipo_vehiculo: "carro",
        marca: "Ford",
        modelo: "Escape",
        color: "Negro Ónix",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d13") // Juan Ruiz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01105"),
        placa: "KPL567",
        tipo_vehiculo: "carro",
        marca: "Nissan",
        modelo: "Sentra",
        color: "Plata Metálico",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d14") // María Jiménez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01106"),
        placa: "LPO890",
        tipo_vehiculo: "carro",
        marca: "Mazda",
        modelo: "2",
        color: "Gris Oscuro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d15") // Diego Moreno
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01107"),
        placa: "MNT012",
        tipo_vehiculo: "carro",
        marca: "Toyota",
        modelo: "Yaris",
        color: "Azul Claro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d16") // Sara Gil
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01108"),
        placa: "QAZ345",
        tipo_vehiculo: "carro",
        marca: "Renault",
        modelo: "Kwid",
        color: "Verde Esmeralda",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d17") // Felipe Cruz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01109"),
        placa: "WSX678",
        tipo_vehiculo: "carro",
        marca: "Volkswagen",
        modelo: "Polo",
        color: "Naranja Atardecer",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d18") // Laura Vargas
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110A"),
        placa: "EDC901",
        tipo_vehiculo: "carro",
        marca: "Hyundai",
        modelo: "HB20",
        color: "Marrón Arena",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d19") // Sebastián Mendoza
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110B"),
        placa: "RFV234",
        tipo_vehiculo: "carro",
        marca: "Kia",
        modelo: "Rio",
        color: "Gris Lunar",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d10") // Luisa García (segundo carro)
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110C"),
        placa: "TGB567",
        tipo_vehiculo: "carro",
        marca: "Chevrolet",
        modelo: "Sail",
        color: "Blanco Nieve",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1A") // Carolina Guerrero
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110D"),
        placa: "YHN890",
        tipo_vehiculo: "carro",
        marca: "Ford",
        modelo: "Focus",
        color: "Azul Zafiro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1B") // Daniel Navarro
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110E"),
        placa: "UJM123",
        tipo_vehiculo: "carro",
        marca: "Toyota",
        modelo: "Etios",
        color: "Negro Carbón",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1C") // Emilia Ramos
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0110F"),
        placa: "IKL456",
        tipo_vehiculo: "carro",
        marca: "Nissan",
        modelo: "March",
        color: "Gris Platino",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1D") // Jorge Delgado
    },

    // --- Motos (8 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01110"),
        placa: "XYZ11A",
        tipo_vehiculo: "moto",
        marca: "Pulsar",
        modelo: "NS 200",
        color: "Rojo Vibrante",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d11") // Pedro López
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01111"),
        placa: "ABC22B",
        tipo_vehiculo: "moto",
        marca: "Yamaha",
        modelo: "MT-03",
        color: "Azul Metálico",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d13") // Juan Ruiz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01112"),
        placa: "DEF33C",
        tipo_vehiculo: "moto",
        marca: "Honda",
        modelo: "CB160F",
        color: "Negro Brillante",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d15") // Diego Moreno
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01113"),
        placa: "GHI44D",
        tipo_vehiculo: "moto",
        marca: "Suzuki",
        modelo: "GSX-S150",
        color: "Blanco Perla",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d17") // Felipe Cruz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01114"),
        placa: "JKL55E",
        tipo_vehiculo: "moto",
        marca: "AKT",
        modelo: "RTX 150",
        color: "Naranja Flúor",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d19") // Sebastián Mendoza
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01115"),
        placa: "MNO66F",
        tipo_vehiculo: "moto",
        marca: "Victory",
        modelo: "Venom 150",
        color: "Gris Cemento",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1B") // Daniel Navarro
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01116"),
        placa: "PQR77G",
        tipo_vehiculo: "moto",
        marca: "TVS",
        modelo: "Apache 200 RTR FI",
        color: "Negro Mate",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1D") // Jorge Delgado
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01117"),
        placa: "STU88H",
        tipo_vehiculo: "moto",
        marca: "KTM",
        modelo: "RC 200",
        color: "Naranja Oscuro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1E") // Fernanda Ortega
    },

    // --- Bicicletas (5 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01118"),
        placa: "BICI06", // Placa simbólica para bicicletas
        tipo_vehiculo: "bicicleta",
        marca: "Giant",
        modelo: "TCR Advanced",
        color: "Negro/Rojo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d10") // Luisa García
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01119"),
        placa: "BICI07",
        tipo_vehiculo: "bicicleta",
        marca: "Scott",
        modelo: "Spark RC",
        color: "Amarillo Neón",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d12") // Ana Fernández
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0111A"),
        placa: "BICI08",
        tipo_vehiculo: "bicicleta",
        marca: "Cannondale",
        modelo: "Scalpel HT",
        color: "Verde Militar",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d14") // María Jiménez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0111B"),
        placa: "BICI09",
        tipo_vehiculo: "bicicleta",
        marca: "Specialized",
        modelo: "Roubaix Comp",
        color: "Blanco Perla",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d16") // Sara Gil
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0111C"),
        placa: "BICI10",
        tipo_vehiculo: "bicicleta",
        marca: "Trek",
        modelo: "Marlin 6",
        color: "Azul Marino",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d18") // Laura Vargas
    },

    // --- Camiones (2 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0111D"),
        placa: "TRCK70G",
        tipo_vehiculo: "camion",
        marca: "Jac",
        modelo: "1061",
        color: "Gris Plata",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1A") // Carolina Guerrero
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0111E"),
        placa: "CAMN80H",
        tipo_vehiculo: "camion",
        marca: "Foton",
        modelo: "Aumark S",
        color: "Rojo Granate",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d1C") // Emilia Ramos
    }
])






