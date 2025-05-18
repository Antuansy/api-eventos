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

| Método | Ruta              | Descripción                     |
|--------|-------------------|---------------------------------|
| GET    | `/usuarios`       | Obtener todos los usuarios      |
| GET    | `/usuarios/:id`   | Obtener un usuario por ID       |
| POST   | `/usuarios`       | Crear un nuevo usuario          |
| PUT    | `/usuarios/:id`   | Actualizar un usuario           |
| DELETE | `/usuarios/:id`   | Eliminar un usuario             |

---

### 📅 Eventos

| Método | Ruta              | Descripción                         |
|--------|-------------------|-------------------------------------|
| GET    | `/eventos`        | Obtener todos los eventos           |
| GET    | `/eventos/:id`    | Obtener un evento por ID            |
| POST   | `/eventos`        | Crear un nuevo evento               |
| PUT    | `/eventos/:id`    | Actualizar un evento                |
| DELETE | `/eventos/:id`    | Eliminar un evento                  |

---

### 🏛️ Espacios

| Método | Ruta              | Descripción                         |
|--------|-------------------|-------------------------------------|
| GET    | `/espacios`       | Obtener todos los espacios          |
| GET    | `/espacios/:id`   | Obtener un espacio por ID           |
| POST   | `/espacios`       | Crear un nuevo espacio              |
| PUT    | `/espacios/:id`   | Actualizar un espacio               |
| DELETE | `/espacios/:id`   | Eliminar un espacio                 |

---

### 🗓️ Actividades

| Método | Ruta                   | Descripción                         |
|--------|------------------------|-------------------------------------|
| GET    | `/actividades`         | Obtener todas las actividades       |
| GET    | `/actividades/:id`     | Obtener una actividad por ID        |
| POST   | `/actividades`         | Crear una nueva actividad           |
| PUT    | `/actividades/:id`     | Actualizar una actividad            |
| DELETE | `/actividades/:id`     | Eliminar una actividad              |

---

### 📥 Reservaciones

| Método | Ruta                      | Descripción                              |
|--------|---------------------------|------------------------------------------|
| GET    | `/reservaciones`          | Obtener todas las reservaciones          |
| GET    | `/reservaciones/:id`      | Obtener una reservación por ID           |
| POST   | `/reservaciones`          | Crear una nueva reservación              |
| PUT    | `/reservaciones/:id`      | Actualizar una reservación               |
| DELETE | `/reservaciones/:id`      | Eliminar una reservación                 |

---

## 📁 Estructura del Proyecto

Basado en la carpeta `api-eventos`:

api-eventos/
│
├── controllers/ # Lógica de controladores para cada recurso
├── routes/ # Definición de rutas y endpoints
├── db/ # Conexión y configuración de base de datos
│
├── .env # Variables de entorno (puerto, claves, etc.)
├── config.js # Configuración general o conexión DB
├── index.js # Archivo principal de la aplicación
│
├── package.json # Dependencias y scripts
├── README.md # Documentación del proyecto
└── reservacion_de_eventos.sql # Script o respaldo de la base de datos

---

## 🚀 Instalación

 Clona el repositorio:
```bash
git clone https://github.com/Antuansy/api-eventos.git
cd api-eventos
