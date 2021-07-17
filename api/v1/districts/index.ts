// External Imports
import express from "express";

// Internal Imports
import getDistricts from "./routes/getDistricts";
import getDistrict from "./routes/getDistrict";

const router = express.Router({ mergeParams: true });

router.get("/", getDistricts);
router.get("/:id", getDistrict);

export default router;
