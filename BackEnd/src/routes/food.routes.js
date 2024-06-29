// routes/foodRoutes.js

import { Router } from "express";
import { addFood } from "../controllers/food.controllers";

const router = Router();

// Ruta para agregar un alimento
router.post('/add-food', addFood);

export default router;
