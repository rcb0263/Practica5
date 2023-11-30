import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { postCliente } from "./resolvers/postCliente.ts";
import { deleteAllRestaurantes } from "./resolvers/deleteAllRestaurantes.ts";
import { deleteRestaurant } from "./resolvers/deleteRestaurante.ts";
import { getCliente } from "./resolvers/getCliente.ts";
import { getRestaurante } from "./resolvers/getRestaurante.ts";
import { postBooking } from "./resolvers/postBooking.ts";
import { postRestaurante } from "./resolvers/postRestaurante.ts";
import { deleteBooking } from "./resolvers/wipeBooking.ts";
import { getBooking } from "./resolvers/findBooking.ts";


const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  throw new Error("Mongo URL not found");
}

console.log("Intentando conectarse");

await mongoose.connect(MONGO_URL);
console.log("Connected to MongoDB");
const api = express();
api.use(express.json());

// Rutas
api.post("/client", async (req: Request, res: Response) => {
  try {
    await postCliente(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating client" });
  }
})
.post("/restaurant", async (req: Request, res: Response) => {
  try {
    await postRestaurante(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating restaurant" });
  }
})

.post("/booking", async (req: Request, res: Response) => {
  try {
    await postBooking(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating booking" });
  }
})

.get("/client/:id", async (req: Request, res: Response) => {
  try {
    await getCliente(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting client" });
  }
})

.get("/restaurant/:id", async (req: Request, res: Response) => {
  try {
    await getRestaurante(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting restaurant" });
  }
})

.get("/booking/:id", async (req: Request, res: Response) => {
  try {
    await getBooking(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting booking" });
  }
})

.delete("/booking/:id", async (req: Request, res: Response) => {
  try {
    await deleteBooking(req, res);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting booking" });
  }
})

.delete("/restaurant/:id", async (req: Request, res: Response) => {
  try {
    await deleteRestaurant(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting restaurant" });
  }
})

.delete("/restaurant", async (req: Request, res: Response) => {
  try {
    await deleteAllRestaurantes(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting all restaurants" });
  }
})

// Puerto de escucha
const PORT = 3000;
api.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});