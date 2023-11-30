import { Request, Response } from "express";
import { RestaurantModel } from "../db/restaurant.ts";

export const postRestaurante = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRestaurantData = req.body;
    const createdRestaurant = await RestaurantModel.create(newRestaurantData);
    res.status(201).json(createdRestaurant);
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: "error de validacion" });
    } else {
      res.status(500).json({ error: "Error al crear restaurant" });
    }
  }
};