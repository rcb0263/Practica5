import mongoose, { Schema, Document } from "mongoose";
import { Restaurante } from "../types.ts";



const restaurantSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    CIF: { type: Number, required: true, unique: true },
    address: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }]
  },
  { timestamps: true }
);

export const RestaurantModel = mongoose.model<Restaurante &Document>("Restaurant", restaurantSchema);