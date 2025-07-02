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

// 50 registros de parqueos, mezclando sedes, zonas y tipos de vehículos. Algunos deben estar actualmente activos (sin hora de salida).


db.parqueos.insertMany([
    // --- Registros de Parqueo Activos (20 registros) ---
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d701"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01101"), // RCD987 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-07-02T08:00:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d702"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01110"), // XYZ11A - moto (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-07-02T08:15:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "moto",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d703"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01105"), // KPL567 - carro (María Jiménez)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d14"), // María Jiménez
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-07-02T08:30:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d704"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01112"), // DEF33C - moto (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-07-02T08:45:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "moto",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d705"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110C"), // TGB567 - carro (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-07-02T09:00:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d706"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01116"), // PQR77G - moto (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fb"), // Zona Lateral - Motocicletas
        hora_entrada: ISODate("2025-07-02T09:10:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "moto",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d707"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110F"), // IKL456 - carro (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-07-02T09:20:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d708"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01118"), // BICI06 - bicicleta (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-07-02T09:30:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d709"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110B"), // RFV234 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-07-02T09:40:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111D"), // TRCK70G - camion (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f4"), // Zona de Carga Especial
        hora_entrada: ISODate("2025-07-02T09:50:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "camion",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01103"), // BNS101 - carro (Ana Fernández)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // Ana Fernández
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fc"), // Zona Convenio - Empresas
        hora_entrada: ISODate("2025-07-02T10:00:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01119"), // BICI07 - bicicleta (Ana Fernández)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // Ana Fernández
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-07-02T10:05:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01104"), // GHS234 - carro (Juan Ruiz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // Juan Ruiz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-07-02T10:15:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01111"), // ABC22B - moto (Juan Ruiz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // Juan Ruiz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-07-02T10:20:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "moto",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d70F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01106"), // LPO890 - carro (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f9"), // Zona VIP Plus
        hora_entrada: ISODate("2025-07-02T10:25:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d710"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111C"), // BICI10 - bicicleta (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-07-02T10:30:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d711"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01107"), // MNT012 - carro (Sara Gil)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d16"), // Sara Gil
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-07-02T10:35:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d712"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01113"), // GHI44D - moto (Felipe Cruz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d15"), // Felipe Cruz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-07-02T10:40:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "moto",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d713"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01109"), // WSX678 - carro (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-07-02T10:45:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d714"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110A"), // EDC901 - carro (Sebastián Mendoza)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"), // Sebastián Mendoza
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f5"), // Zona Preferencial - SUVs (compatible con carro)
        hora_entrada: ISODate("2025-07-02T10:48:00.000Z"),
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null,
        tipo_vehiculo_parqueado: "carro",
        activo: true
    },

    // --- Registros de Parqueo Finalizados (30 registros) ---
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d715"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01102"), // TRW456 - carro (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-07-01T07:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T09:30:00.000Z"),
        tiempo_parqueo_minutos: 150, // 2 horas y 30 minutos
        costo_total: 30000, // 150 min * 200 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d716"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01114"), // JKL55E - moto (Sebastián Mendoza)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"), // Sebastián Mendoza
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-07-01T08:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T08:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 5250, // 50 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d717"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110D"), // YHN890 - carro (Daniel Navarro)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"), // Daniel Navarro
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-07-01T09:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T11:00:00.000Z"),
        tiempo_parqueo_minutos: 120,
        costo_total: 21000, // 120 min * 175 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d718"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111B"), // BICI09 - bicicleta (Sara Gil)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d16"), // Sara Gil
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-07-01T10:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T10:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 2700, // 45 min * 60 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d719"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110E"), // UJM123 - carro (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-07-01T11:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T13:00:00.000Z"),
        tiempo_parqueo_minutos: 120,
        costo_total: 22800, // 120 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111E"), // CAMN80H - camion (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fe"), // Zona Carga Express
        hora_entrada: ISODate("2025-07-01T12:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T12:30:00.000Z"),
        tiempo_parqueo_minutos: 30,
        costo_total: 12000, // 30 min * 400 COP/min
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01108"), // QAZ345 - carro (Felipe Cruz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d15"), // Felipe Cruz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-06-30T22:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T07:00:00.000Z"),
        tiempo_parqueo_minutos: 540, // 9 horas
        costo_total: 102600, // 540 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01117"), // STU88H - moto (Fernanda Ortega)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d10"), // Fernanda Ortega
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fb"), // Zona Lateral - Motocicletas
        hora_entrada: ISODate("2025-07-01T13:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T14:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 8550, // 90 min * 95 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01102"), // TRW456 - carro (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f9"), // Zona VIP Plus
        hora_entrada: ISODate("2025-07-01T14:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T15:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 18200, // 70 min * 260 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111A"), // BICI08 - bicicleta (María Jiménez)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d14"), // María Jiménez
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-07-01T15:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T15:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 3000, // 50 min * 60 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d71F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110B"), // RFV234 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fc"), // Zona Convenio - Empresas
        hora_entrada: ISODate("2025-07-01T16:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T17:15:00.000Z"),
        tiempo_parqueo_minutos: 75,
        costo_total: 12000, // 75 min * 160 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d720"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01107"), // MNT012 - carro (Sara Gil)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d16"), // Sara Gil
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-07-01T17:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T18:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10200, // 60 min * 170 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d721"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01115"), // MNO66F - moto (Daniel Navarro)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"), // Daniel Navarro
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fb"), // Zona Lateral - Motocicletas
        hora_entrada: ISODate("2025-07-01T18:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T18:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 3800, // 40 min * 95 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d722"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110F"), // IKL456 - carro (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-07-01T19:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T20:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10800, // 60 min * 180 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d723"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01103"), // BNS101 - carro (Ana Fernández)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // Ana Fernández
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-07-01T20:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T21:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 17100, // 90 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d724"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110C"), // TGB567 - carro (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-07-01T21:00:00.000Z"),
        hora_salida: ISODate("2025-07-01T23:00:00.000Z"),
        tiempo_parqueo_minutos: 120,
        costo_total: 21000, // 120 min * 175 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d725"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01101"), // RCD987 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-06-30T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T10:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 9000, // 45 min * 200 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d726"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01110"), // XYZ11A - moto (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-06-30T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T12:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 7200, // 60 min * 120 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d727"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01105"), // KPL567 - carro (María Jiménez)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d14"), // María Jiménez
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-06-30T12:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T13:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 17100, // 90 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d728"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01112"), // DEF33C - moto (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-06-30T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T13:55:00.000Z"),
        tiempo_parqueo_minutos: 55,
        costo_total: 5775, // 55 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d729"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110E"), // UJM123 - carro (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-06-30T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T16:00:00.000Z"),
        tiempo_parqueo_minutos: 120,
        costo_total: 21000, // 120 min * 175 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01116"), // PQR77G - moto (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fb"), // Zona Lateral - Motocicletas
        hora_entrada: ISODate("2025-06-30T15:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T15:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 4275, // 45 min * 95 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110F"), // IKL456 - carro (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-06-29T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T10:15:00.000Z"),
        tiempo_parqueo_minutos: 75,
        costo_total: 15000, // 75 min * 200 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01118"), // BICI06 - bicicleta (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-06-29T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T10:30:00.000Z"),
        tiempo_parqueo_minutos: 30,
        costo_total: 1800, // 30 min * 60 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110B"), // RFV234 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-06-29T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T12:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10200, // 60 min * 170 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111D"), // TRCK70G - camion (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f4"), // Zona de Carga Especial
        hora_entrada: ISODate("2025-06-29T12:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T12:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 14000, // 40 min * 350 COP/min
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d72F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01103"), // BNS101 - carro (Ana Fernández)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // Ana Fernández
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fc"), // Zona Convenio - Empresas
        hora_entrada: ISODate("2025-06-29T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T14:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 14400, // 90 min * 160 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d730"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01119"), // BICI07 - bicicleta (Ana Fernández)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // Ana Fernández
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-06-29T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T14:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 2475, // 45 min * 55 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d731"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01104"), // GHS234 - carro (Juan Ruiz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // Juan Ruiz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-06-29T15:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T16:20:00.000Z"),
        tiempo_parqueo_minutos: 80,
        costo_total: 15200, // 80 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d732"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01111"), // ABC22B - moto (Juan Ruiz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // Juan Ruiz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-06-29T16:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T16:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 5000, // 50 min * 100 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d733"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01106"), // LPO890 - carro (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f9"), // Zona VIP Plus
        hora_entrada: ISODate("2025-06-29T17:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T17:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 10400, // 40 min * 260 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d734"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111C"), // BICI10 - bicicleta (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-06-29T18:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T18:25:00.000Z"),
        tiempo_parqueo_minutos: 25,
        costo_total: 1375, // 25 min * 55 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d735"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01107"), // MNT012 - carro (Sara Gil)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d16"), // Sara Gil
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-06-29T19:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T20:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 10150, // 70 min * 145 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d736"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01113"), // GHI44D - moto (Felipe Cruz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d15"), // Felipe Cruz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-06-29T20:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T20:55:00.000Z"),
        tiempo_parqueo_minutos: 55,
        costo_total: 4125, // 55 min * 75 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d737"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01109"), // WSX678 - carro (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-06-28T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T10:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10800, // 60 min * 180 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d738"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110A"), // EDC901 - carro (Sebastián Mendoza)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"), // Sebastián Mendoza
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f5"), // Zona Preferencial - SUVs
        hora_entrada: ISODate("2025-06-28T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T11:15:00.000Z"),
        tiempo_parqueo_minutos: 75,
        costo_total: 16500, // 75 min * 220 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d739"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01101"), // RCD987 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-06-28T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T12:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 11400, // 60 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01110"), // XYZ11A - moto (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fb"), // Zona Lateral - Motocicletas
        hora_entrada: ISODate("2025-06-28T12:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T12:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 4750, // 50 min * 95 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01105"), // KPL567 - carro (María Jiménez)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d14"), // María Jiménez
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-06-28T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T14:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 12600, // 70 min * 180 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01112"), // DEF33C - moto (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-06-28T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T14:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 4200, // 40 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110E"), // UJM123 - carro (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-06-28T15:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T16:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 10150, // 70 min * 145 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01117"), // STU88H - moto (Fernanda Ortega)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d10"), // Fernanda Ortega
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-06-28T16:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T16:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 3375, // 45 min * 75 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d73F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01109"), // WSX678 - carro (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-06-27T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T09:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 17100, // 90 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d740"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110A"), // EDC901 - carro (Sebastián Mendoza)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"), // Sebastián Mendoza
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-06-27T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T10:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 12000, // 60 min * 200 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d741"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110B"), // RFV234 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-06-27T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T11:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 15750, // 90 min * 175 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d742"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01111"), // ABC22B - moto (Juan Ruiz)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // Juan Ruiz
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-06-27T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T11:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 5250, // 50 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d743"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110C"), // TGB567 - carro (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f3"), // Zona Nocturna - Mixta
        hora_entrada: ISODate("2025-06-27T12:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T13:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 11400, // 60 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d744"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111D"), // TRCK70G - camion (Carolina Guerrero)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"), // Carolina Guerrero
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fe"), // Zona Carga Express
        hora_entrada: ISODate("2025-06-27T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T13:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 16000, // 40 min * 400 COP/min
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d745"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110D"), // YHN890 - carro (Daniel Navarro)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"), // Daniel Navarro
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f2"), // Zona Acceso Rápido - Carros Pequeños
        hora_entrada: ISODate("2025-06-27T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T15:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10800, // 60 min * 180 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d746"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01115"), // MNO66F - moto (Daniel Navarro)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"), // Daniel Navarro
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-06-27T15:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T15:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 4725, // 45 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d747"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110E"), // UJM123 - carro (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fc"), // Zona Convenio - Empresas
        hora_entrada: ISODate("2025-06-27T16:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T17:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 11200, // 70 min * 160 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d748"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111E"), // CAMN80H - camion (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f4"), // Zona de Carga Especial
        hora_entrada: ISODate("2025-06-27T17:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T17:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 17500, // 50 min * 350 COP/min
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d749"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110F"), // IKL456 - carro (Jorge Delgado)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"), // Jorge Delgado
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f6"), // Zona General - Todos los Vehículos
        hora_entrada: ISODate("2025-06-26T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T09:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 15300, // 90 min * 170 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0111C"), // BICI10 - bicicleta (Laura Vargas)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d18"), // Laura Vargas
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fd"), // Zona Patio - Temporal
        hora_entrada: ISODate("2025-06-26T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T09:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 3000, // 40 min * 75 COP/min
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01101"), // RCD987 - carro (Luisa García)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d13"), // Luisa García
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f0"), // Zona Techada - Carros Grandes
        hora_entrada: ISODate("2025-06-26T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T11:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 12000, // 60 min * 200 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01110"), // XYZ11A - moto (Pedro López)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // Pedro López
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d4"), // Barranquilla
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f1"), // Zona Externa - Motos y Bicicletas
        hora_entrada: ISODate("2025-06-26T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T11:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 5400, // 45 min * 120 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01105"), // KPL567 - carro (María Jiménez)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d14"), // María Jiménez
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f7"), // Zona Subterránea - Carros
        hora_entrada: ISODate("2025-06-26T12:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T13:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 13300, // 70 min * 190 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01112"), // DEF33C - moto (Diego Moreno)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // Diego Moreno
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d5"), // Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4f8"), // Zona Exclusiva Motos
        hora_entrada: ISODate("2025-06-26T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T13:30:00.000Z"),
        tiempo_parqueo_minutos: 30,
        costo_total: 3150, // 30 min * 105 COP/min
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    {
        _id: new ObjectId("668399c2d1e2f3a4b5c6d74F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0110E"), // UJM123 - carro (Emilia Ramos)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"), // Emilia Ramos
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d6"), // Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4fa"), // Zona Principal - Sedanes
        hora_entrada: ISODate("2025-06-26T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T15:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 15750, // 90 min * 175 COP/min
        tipo_vehiculo_parqueado: "carro",
        activo: false
    }
]);




