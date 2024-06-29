// index.js

import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import foodRoutes from './routes/food.routes';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'PUT'],
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Ruta para manejar la raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
});

// Rutas
app.use('/api', foodRoutes);


export default app;
