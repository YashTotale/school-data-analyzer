// External Imports
import { RequestHandler } from "express";

// Internal Imports
import District from "../model";

interface Params {
  /**
   * The limit of the query (defaults to 100)
   */
  limit?: string;
}

const getDistricts: RequestHandler<Params> = async (req, res) => {
  const { limit: limitStr = "100" } = req.params;
  const limit = parseInt(limitStr) || undefined;

  const districts = await District.findAll({
    limit,
  });

  return res.status(200).send(JSON.stringify(districts));
};

export default getDistricts;
