// External Imports
import { RequestHandler } from "express";

// Internal Imports
import School from "../model";

interface Params {
  /**
   * The limit of the query (defaults to 100)
   */
  limit?: string;
}

const getSchools: RequestHandler<Params> = async (req, res) => {
  const { limit: limitStr = "100" } = req.params;
  const limit = parseInt(limitStr) || undefined;

  const schools = await School.findAll({
    limit,
  });

  return res.status(200).send(JSON.stringify(schools));
};

export default getSchools;
