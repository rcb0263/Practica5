import { Request, Response } from "express";
import { RestaurantModel } from "../db/restaurant.ts";

export const deleteAllRestaurantes = async (_req: Request, res: Response) => {
  try {
    await RestaurantModel.deleteMany({});
    res.json({ message: "Todos los restaurantes borrados" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al borrar todos los restaurantes" });
  }
};