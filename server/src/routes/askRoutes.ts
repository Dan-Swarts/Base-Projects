import { Router } from "express";
import { generateConversation } from "../openAiModel/conversationModel.js";

const router = Router();

// post /ai/conversation
router.post("/conversation", generateConversation);

export default router;
