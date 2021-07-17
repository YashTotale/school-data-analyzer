// External Imports
import express from "express";

// Internal Imports
import getDistricts from "./routes/getDistricts";

const router = express.Router({ mergeParams: true });

router.get("/", getDistricts);

export default router;
