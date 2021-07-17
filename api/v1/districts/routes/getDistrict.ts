// External Imports
import { RequestHandler } from "express";

// Internal Imports
import District from "../model";

const INVALID_ID = "Please provide a valid district id.";

interface Params {
  id: string;
}

const getDistrict: RequestHandler<Params> = async (req, res) => {
  const { id } = req.params;
  const index = parseInt(id);

  if (typeof index !== "number") {
    return res.status(400).send(INVALID_ID);
  }

  const district = await District.findByPk(id);

  if (!district) {
    return res.status(400).send(INVALID_ID);
  }

  return res.status(200).send(JSON.stringify(district));
};

export default getDistrict;
