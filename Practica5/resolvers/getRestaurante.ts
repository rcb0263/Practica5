import { Request, Response } from "express";
import { RestaurantModel } from "../db/restaurant.ts";

export const getRestaurante = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const restaurant = await RestaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurante no se encuentra" });
    }
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar restaurante" });
  }
};