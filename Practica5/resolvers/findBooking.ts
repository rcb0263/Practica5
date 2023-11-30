import { Request, Response } from "express";
import { BookingModel } from "../db/booking.ts";

export const getBooking = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.params;
    const booking = await BookingModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking no encontrado" });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar booking" });
  }
};