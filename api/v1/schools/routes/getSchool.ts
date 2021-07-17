// External Imports
import { RequestHandler } from "express";

// Internal Imports
import School from "../model";

const INVALID_ID = "Please provide a valid school id.";

interface Params {
  id: string;
}

const getSchool: RequestHandler<Params> = async (req, res) => {
  const { id } = req.params;
  const index = parseInt(id);

  if (typeof index !== "number") {
    return res.status(400).send(INVALID_ID);
  }

  const school = await School.findOne({
    where: {
      index: id,
    },
  });

  if (!school) {
    return res.status(400).send(INVALID_ID);
  }

  return res.status(200).send(JSON.stringify(school));
};

export default getSchool;
