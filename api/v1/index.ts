// External Imports
import express from "express";

// Internal Imports
import schoolsRouter from "./schools";
import districtsRouter from "./districts";

const router = express.Router({ mergeParams: true });

router.use("/schools", schoolsRouter);
router.use("/districts", districtsRouter);

export default router;
