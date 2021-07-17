// External Imports
import { RequestHandler } from "express";

// Internal Imports
import District from "../model";

interface Query {
  /**
   * The limit of the query (defaults to 100)
   */
  limit?: string;
}

const getDistricts: RequestHandler<any, any, any, Query> = async (req, res) => {
  const { limit: limitStr = "100" } = req.query;
  const limit = parseInt(limitStr) || 100;

  const districts = await District.findAll({
    limit,
  });

  return res.status(200).send(JSON.stringify(districts));
};

export default getDistricts;
