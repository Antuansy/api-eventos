# 🎯 API de Gestión de Eventos

API RESTful para administrar eventos, usuarios, espacios, actividades y reservaciones. Esta API permite organizar eventos con múltiples actividades en diferentes espacios y manejar las reservaciones de los asistentes.

---

## 📦 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **dotenv** para variables de entorno
- **(ORM opcional)** Sequelize o Knex.js
- Estructura modular: controladores, rutas y conexión a base de datos.

---

## 🗃️ Modelo relacional

**Basado en el diagrama de entidad-relación:**

### 🔹 Tabla: `usuarios`
- `id_usuario` (PK)
- `nombre`
- `correo`
- `telefono`
- `tipo` (ENUM: `organizador`, `asistente`)

### 🔹 Tabla: `eventos`
- `id_evento` (PK)
- `nombre`
- `descripcion`
- `fecha`
- `hora`
- `id_espacio` (FK → espacios)
- `id_organizador` (FK → usuarios)

### 🔹 Tabla: `espacios`
- `id_espacio` (PK)
- `nombre`
- `ubicacion`
- `capacidad`

### 🔹 Tabla: `actividades`
- `id_actividad` (PK)
- `id_evento` (FK → eventos)
- `nombre`
- `descripcion`
- `hora_inicio`
- `hora_fin`

### 🔹 Tabla: `reservaciones`
- `id_reservacion` (PK)
- `id_evento` (FK → eventos)
- `id_asistente` (FK → usuarios)
- `fecha_reserva`

---

## 🔗 Endpoints REST (organizados por recurso)

### 👤 Usuarios

| Método | Ruta                 | Descripción                     |
|--------|----------------------|---------------------------------|
| GET    | `api/usuarios`       | Obtener todos los usuarios      |
| GET    | `api/usuarios/:id`   | Obtener un usuario por ID       |
| POST   | `api/usuarios`       | Crear un nuevo usuario          |
| PUT    | `api/usuarios/:id`   | Actualizar un usuario           |
| DELETE | `api/usuarios/:id`   | Eliminar un usuario             |

---

### 📅 Eventos

| Método | Ruta                 | Descripción                         |
|--------|----------------------|-------------------------------------|
| GET    | `api/eventos`        | Obtener todos los eventos           |
| GET    | `api/eventos/:id`    | Obtener un evento por ID            |
| POST   | `api/eventos`        | Crear un nuevo evento               |
| PUT    | `api/eventos/:id`    | Actualizar un evento                |
| DELETE | `api/eventos/:id`    | Eliminar un evento                  |

---

### 🏛️ Espacios

| Método | Ruta                 | Descripción                         |
|--------|----------------------|-------------------------------------|
| GET    | `api/espacios`       | Obtener todos los espacios          |
| GET    | `api/espacios/:id`   | Obtener un espacio por ID           |
| POST   | `api/espacios`       | Crear un nuevo espacio              |
| PUT    | `api/espacios/:id`   | Actualizar un espacio               |
| DELETE | `api/espacios/:id`   | Eliminar un espacio                 |

---

### 🗓️ Actividades

| Método | Ruta                      | Descripción                         |
|--------|---------------------------|-------------------------------------|
| GET    | `api/actividades`         | Obtener todas las actividades       |
| GET    | `api/actividades/:id`     | Obtener una actividad por ID        |
| POST   | `api/actividades`         | Crear una nueva actividad           |
| PUT    | `api/actividades/:id`     | Actualizar una actividad            |
| DELETE | `api/actividades/:id`     | Eliminar una actividad              |

---

### 📥 Reservaciones

| Método | Ruta                         | Descripción                              |
|--------|------------------------------|------------------------------------------|
| GET    | `api/reservaciones`          | Obtener todas las reservaciones          |
| GET    | `api/reservaciones/:id`      | Obtener una reservación por ID           |
| POST   | `api/reservaciones`          | Crear una nueva reservación              |
| PUT    | `api/reservaciones/:id`      | Actualizar una reservación               |
| DELETE | `api/reservaciones/:id`      | Eliminar una reservación                 |

---

## 📁 Estructura del Proyecto

Basado en la carpeta `api-eventos`:

API-EVENTOS/
│
├── controllers/              # Controladores con la lógica de cada entidad
│   ├── actividadesController.js
│   ├── espaciosController.js
│   ├── eventosController.js
│   ├── reservacionesController.js
│   └── usuariosController.js
│
├── db/                       # Conexión y consultas a la base de datos
│   ├── actividadesQuery.js
│   ├── db.js                 # Pool de conexión a PostgreSQL
│   ├── espaciosQuery.js
│   ├── eventosQuery.js
│   ├── reservacionesQuery.js
│   └── usuariosQuery.js
│
├── routes/                   # Rutas de la API para cada recurso
│   ├── actividadesRoute.js
│   ├── espaciosRoute.js
│   ├── eventosRoute.js
│   ├── reservacionesRoute.js
│   └── usuariosRoute.js
│
├── .env                      # Variables de entorno (credenciales, puertos, etc.)
├── .gitignore                # Archivos ignorados por Git
├── config.js                 # Configuración general (puerto, base de datos, etc.)
├── index.js                  # Punto de entrada de la aplicación
├── package.json              # Dependencias y scripts del proyecto
├── package-lock.json         # Lockfile de NPM
├── README.md                 # Documentación del proyecto
└── reservacion_de_eventos.sql  # Script SQL para creación de las tablas


---

## 🚀 Instalación

 Clona el repositorio:

git clone https://github.com/Antuansy/api-eventos.git
cd api-eventos

Instala las dependencias:

npm install

Configura las variables de entorno en un archivo .env:

DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=eventos
PORT=3000

Ejecuta la aplicación desde el navegador:
localhost:3000
