import { Request, Response } from "express";
import { BookingModel } from "../db/booking.ts";

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.params;
    const deletedBooking = await BookingModel.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting booking" });
  }
};