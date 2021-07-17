// External Imports
import express from "express";

// Internal Imports
import getSchools from "./routes/getSchools";
import getSchool from "./routes/getSchool";

const router = express.Router({ mergeParams: true });

router.get("/", getSchools);
router.get("/:id", getSchool);

export default router;
