import { Request, Response } from "express";
import { BookingModel } from "../db/booking.ts";

export const postBooking = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBookingData = req.body;
    const createdBooking = await BookingModel.create(newBookingData);
    res.status(201).json(createdBooking);
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: "error de validacion" });
    } else {
      res.status(500).json({ error: "Error al crear booking" });
    }
  }
};