import { Router } from "express";
import openAIRouter from "./askRoutes.js";

const router = Router();

router.use("/ai", openAIRouter);

export default router;
