import { Request, Response } from "express";
import { RestaurantModel } from "../db/restaurant.ts";

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const deletedRestaurant = await RestaurantModel.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) {
      return res.status(404).json({ error: "Restaurante no encontrado" });
    }
    res.json({ message: "Restaurant borrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al borrar restaurante" });
  }
};
