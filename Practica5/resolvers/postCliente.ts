// resolvers/postCliente.ts
import { Request, Response } from "express";
import { ClientModel } from "../db/client.ts";


export const postCliente = async (req: Request, res: Response): Promise<void> => {
  try {
    const newClientData = req.body;
    const createdClient = await ClientModel.create(newClientData);
    res.status(201).json(createdClient);
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: "error de validacion" });
    } else {
      res.status(500).json({ error: "Error al crear cliente" });
    }
  }
};