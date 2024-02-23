// Importar Express
import express from 'express';
import cors from 'cors';

import beybladeRoutes from './routes/beybladeRoutes.js';

// Inicializar la aplicación Express
const app = express();

// Habilita CORS para todas las solicitudes de cualquier origen
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Utilizar las rutas de Beyblades
app.use('/beyblades', beybladeRoutes);

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
