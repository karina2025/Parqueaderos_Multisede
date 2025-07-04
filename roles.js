//  Crear Rol Administrador

// Crear rol de administrador con acceso total
db.createRole({
  role: "administrador_campus",
  privileges: [
    {
      resource: { db: "campus_parking", collection: "" },
      actions: [
        "find", "insert", "update", "remove",
        "createIndex", "dropIndex",
        "createCollection", "dropCollection"
      ]
    }
  ],
  roles: [
    { role: "dbAdmin", db: "campus_parking" },
    { role: "userAdmin", db: "campus_parking" }
  ]
})

// Crear Rol Empleado de Sede


// Crear rol de empleado con acceso limitado
db.createRole({
  role: "empleado_sede",
  privileges: [
    // Puede leer usuarios (solo para verificar clientes)
    {
      resource: { db: "campus_parking", collection: "usuarios" },
      actions: ["find"]
    },
    // Puede leer vehículos
    {
      resource: { db: "campus_parking", collection: "vehiculos" },
      actions: ["find"]
    },
    // Puede leer sedes (solo la suya)
    {
      resource: { db: "campus_parking", collection: "sedes" },
      actions: ["find"]
    },
    // Puede leer zonas (solo de su sede)
    {
      resource: { db: "campus_parking", collection: "zonas" },
      actions: ["find", "update"] // Para actualizar cupos
    },
    // Puede gestionar parqueos (registrar ingresos/salidas)
    {
      resource: { db: "campus_parking", collection: "parqueos" },
      actions: ["find", "insert", "update"]
    }
  ],
  roles: []
})


//  Crear Rol Cliente


// Crear rol de cliente con acceso mínimo
db.createRole({
  role: "cliente_campus",
  privileges: [
    // Puede leer solo su propia información de usuario
    {
      resource: { db: "campus_parking", collection: "usuarios" },
      actions: ["find"]
    },
    // Puede leer sus propios vehículos
    {
      resource: { db: "campus_parking", collection: "vehiculos" },
      actions: ["find"]
    },
    // Puede leer información general de sedes
    {
      resource: { db: "campus_parking", collection: "sedes" },
      actions: ["find"]
    },
    // Puede leer disponibilidad de zonas
    {
      resource: { db: "campus_parking", collection: "zonas" },
      actions: ["find"]
    },
    // Puede leer solo su historial de parqueos
    {
      resource: { db: "campus_parking", collection: "parqueos" },
      actions: ["find"]
    }
  ],
  roles: []
})

// Crear Usuarios y Asignar Roles

//Crear Usuario Administrador

// Crear usuario administrador
db.createUser({
  user: "admin_campus",
  pwd: "admin123",
  roles: [
    { role: "administrador_campus", db: "campus_parking" }
  ]
})
//Crear Usuarios Empleados
javascript// Empleado de Bogotá
db.createUser({
  user: "empleado_bogota",
  pwd: "emp_bog123",
  roles: [
    { role: "empleado_sede", db: "campus_parking" }
  ]
})

// Empleado de Medellín
db.createUser({
  user: "empleado_medellin", 
  pwd: "emp_med123",
  roles: [
    { role: "empleado_sede", db: "campus_parking" }
  ]
})

// Empleado de Cali
db.createUser({
  user: "empleado_cali",
  pwd: "emp_cal123", 
  roles: [
    { role: "empleado_sede", db: "campus_parking" }
  ]
})
// Crear Usuarios Clientes
javascript// Cliente ejemplo 1
db.createUser({
  user: "cliente_ana",
  pwd: "cliente123",
  roles: [
    { role: "cliente_campus", db: "campus_parking" }
  ]
})

// Cliente ejemplo 2
db.createUser({
  user: "cliente_carlos",
  pwd: "cliente456",
  roles: [
    { role: "cliente_campus", db: "campus_parking" }
  ]
})


 //Probar los Permisos

//Probar como Administrador
javascript// Conectar como administrador
db.auth("admin_campus", "admin123")

// Debe funcionar - acceso total
db.usuarios.find().count()
db.sedes.insertOne({codigo_sede: "TEST001", nombre: "Sede Test"})
db.usuarios.createIndex({"email": 1})

// Cerrar sesión
db.logout()
//Probar como Empleado
javascript// Conectar como empleado
db.auth("empleado_bogota", "emp_bog123")

// Debe funcionar - puede leer
db.usuarios.find({tipo_usuario: "cliente"}).limit(5)
db.vehiculos.find().limit(5)
db.zonas.find({sede_codigo: "BOG001"})

// Debe funcionar - puede registrar parqueo
db.parqueos.insertOne({
  codigo_parqueo: "PARK001",
  placa_vehiculo: "ABC123",
  sede_codigo: "BOG001",
  zona_codigo: "BOG001-A",
  fecha_entrada: new Date(),
  estado: "activo"
})

// NO debe funcionar - no puede crear usuarios
db.usuarios.insertOne({
  cedula: "99999999",
  nombre: "Test",
  tipo_usuario: "cliente"
})

// Cerrar sesión
db.logout()
//Probar como Cliente
javascript// Conectar como cliente
db.auth("cliente_ana", "cliente123")

// Debe funcionar - puede ver disponibilidad
db.sedes.find({}, {nombre: 1, ciudad: 1})
db.zonas.find({}, {nombre: 1, cupos_disponibles: 1, tarifa_por_hora: 1})

// Debe funcionar - puede ver su historial (simulado)
db.parqueos.find({placa_vehiculo: "ABC123"})

// NO debe funcionar - no puede ver otros clientes
db.usuarios.find({tipo_usuario: "cliente"})

// NO debe funcionar - no puede registrar parqueos
db.parqueos.insertOne({
  codigo_parqueo: "PARK002",
  placa_vehiculo: "XYZ789",
  estado: "activo"
})

// Cerrar sesión
db.logout()



///PASO 4: Consultas con Filtros de Seguridad
//Consultas Seguras para Empleados
javascript// Función para empleado ver solo su sede
function consultarZonasPorSede(codigoSede) {
  return db.zonas.find({
    sede_codigo: codigoSede
  }, {
    nombre: 1,
    capacidad_maxima: 1,
    cupos_disponibles: 1,
    tarifa_por_hora: 1
  })
}

// Función para registrar ingreso (solo su sede)
function registrarIngreso(datosParqueo, sedeEmpleado) {
  if (datosParqueo.sede_codigo !== sedeEmpleado) {
    throw new Error("No tiene permisos para esta sede")
  }
  
  return db.parqueos.insertOne(datosParqueo)
}
// Consultas Seguras para Clientes
javascript// Función para cliente ver solo su historial
function consultarMiHistorial(cedulaCliente) {
  return db.parqueos.aggregate([
    {
      $lookup: {
        from: "vehiculos",
        localField: "placa_vehiculo",
        foreignField: "placa",
        as: "vehiculo"
      }
    },
    {
      $match: {
        "vehiculo.propietario_cedula": cedulaCliente
      }
    },
    {
      $project: {
        fecha_entrada: 1,
        sede_codigo: 1,
        zona_codigo: 1,
        tiempo_total_minutos: 1,
        costo_total: 1
      }
    }
  ])
}

// PASO 5: Verificar Roles Creados
//Listar todos los roles
javascript// Ver roles del sistema
db.getRoles()

// Ver roles personalizados
db.getRoles({rolesInfo: 1, showPrivileges: true})
//Verificar usuarios y sus roles
javascript// Listar usuarios
db.getUsers()

// Ver permisos específicos de un usuario
db.getUser("empleado_bogota")
//Verificar permisos específicos
javascript// Verificar si un usuario tiene permisos específicos
db.runCommand({
  usersInfo: "empleado_bogota",
  showPrivileges: true
})

//PASO 6: Manejo de Errores y Seguridad
//Errores comunes y soluciones
javascript// Error: Usuario no autorizado
// Solución: Verificar que el usuario tenga el rol correcto
db.grantRolesToUser("empleado_bogota", [
  {role: "empleado_sede", db: "campus_parking"}
])

// Error: Rol no existe
// Solución: Crear el rol primero
db.createRole({})

// Error: Permisos insuficientes
// Solución: Verificar los privileges del rol
db.getRole("empleado_sede", {showPrivileges: true})
//Buenas prácticas de seguridad
javascript// 1. Usar contraseñas seguras
db.changeUserPassword("empleado_bogota", "nueva_contraseña_segura_123!")

// 2. Revocar roles cuando sea necesario
db.revokeRolesFromUser("empleado_bogota", [
  {role: "empleado_sede", db: "campus_parking"}
])

// 3. Auditar accesos regularmente
db.runCommand({usersInfo: 1})




//PASO 7 Comandos de Gestión
//Modificar roles existentes
javascript// Agregar privilegios a un rol
db.grantPrivilegesToRole("empleado_sede", [
  {
    resource: {db: "campus_parking", collection: "reportes"},
    actions: ["find"]
  }
])

// Quitar privilegios de un rol
db.revokePrivilegesFromRole("empleado_sede", [
  {
    resource: {db: "campus_parking", collection: "reportes"},
    actions: ["find"]
  }
])
//Eliminar roles y usuarios
javascript// Eliminar un usuario
db.dropUser("cliente_ana")

// Eliminar un rol
db.dropRole("cliente_campus")