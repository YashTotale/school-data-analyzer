// External Imports
import express from "express";

// Internal Imports
import getSchools from "./routes/getSchools";

const router = express.Router({ mergeParams: true });

router.get("/", getSchools);

export default router;
