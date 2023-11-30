import mongoose, { Schema, Document } from "mongoose";
import { Booking } from "../types.ts";

const bookingSchema = new Schema(
  {
    date: { type: String, required: true },
    client: { type: Schema.Types.ObjectId, required: true },
    restaurant: { type: Schema.Types.ObjectId, required: true, ref: "Restaurant" }
  },
  { timestamps: true }
);

export const BookingModel = mongoose.model<Booking & Document>("Booking", bookingSchema);
