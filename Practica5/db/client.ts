import mongoose, { Schema, Document } from "mongoose";
import { Client } from "../types.ts";


const clientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true,
      validate: {
        validator: (value: string) => /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value),
        message: "Invalid email",
      },
    },
    phoneNumber: { type: Number, required: true, unique: true,
      validate: {
        validator: (value: number) => /^[0-9]{9}$/.test(value.toString()),
        message: "Invalid phoneNumber",
      },
    },
    DNI: {
      type: String, required: true, unique: true,
      validate: {
        validator: (value: string) => /^[0-9]{8}[A-Za-z]$/.test(value),
        message: "DNI Invalid0",
      },
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

export const ClientModel = mongoose.model<Client & Document>("Client", clientSchema);