import { Request, Response } from "express";
import { ClientModel } from "../db/client.ts";

export const getCliente = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const client = await ClientModel.findById(clientId);
    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar cliente" });
  }
};