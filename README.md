
# App Beyblade para los Duros

Bienvenido al repositorio de la aplicación Beyblade. Sigue estas instrucciones para poner en marcha la aplicación.

## 🚀 Inicio Rápido

### Paso 1: Verificar Node.js

Primero, asegúrate de tener Node.js instalado. Abre la terminal y ejecuta:

```bash
node -v
```

Si ves un número de versión, estás listo para continuar. Si no, [descarga e instala Node.js](https://nodejs.org/en/) optando por la versión LTS.

### Paso 2: Instalar Dependencias

Con Node.js instalado, abre la terminal en Visual Studio Code y navega a la carpeta raíz del proyecto `App-Beyblade`. Ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias para el proyecto.

### Paso 3: Configuración de la Base de Datos

Utiliza XAMPP y accede a phpMyAdmin para crear la base de datos. Ejecuta el script proporcionado en `script.sql` en la sección SQL de phpMyAdmin para configurar tu base de datos y la tabla `beyblades`.

### Paso 4: Iniciar la API

En la carpeta raíz, inicia el servidor con:

```bash
npm start
```

Deberías ver un mensaje indicando que el servidor está funcionando en `http://localhost:3000` y que la conexión con la base de datos fue exitosa.

### Paso 5: Pruebas

Abre `index.html` en tu navegador y realiza algunas pruebas para asegurarte de que todo funcione correctamente.

## 🧐 ¿Qué Sigue?

- Tómate tu tiempo para explorar la estructura del proyecto, especialmente el modelo de carpetas y la organización de los controladores.
- Considera cómo podrías modificar la base de datos y los controladores si una Beyblade pudiera tener múltiples tipos o si un pana pudiera tener varias Beyblades.
- Por ultimo para tocarte un poco los webos, todo lo he hecho con promesas asi que te toca cambiar todas las promesas a `async/await`. Dale duro panota que los exams te van a salir dpm.

Dale duro panota que los exams te van a salir dpm :)
