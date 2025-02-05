import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import dotenv from "dotenv";
import { Request, Response } from "express";

// Retrive API key
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;

// Define response schema
const ResponseFormatter = z.object({
  possibleMessage1: z
    .string()
    .describe(
      "The first possible message I could send. Keep in mind that each possibility should inquire about a different aspect of the company."
    ),
  possibleMessage2: z
    .string()
    .describe(
      "The second possible message I could send. Keep in mind that each possibility should inquire about a different aspect of the company."
    ),
  possibleMessage3: z
    .string()
    .describe(
      "The third possible message I could send. Keep in mind that each possibility should inquire about a different aspect of the company."
    ),
  possibleMessage4: z
    .string()
    .describe(
      "The first possible message I could send. This one should ask for a refferal."
    ),
});

// Create the system prompt
const systemPrompt = `I need help messaging a stranger 
on Linked In to get a referral. I need you to help me 
write linked  in direct messages. The messages written 
should be friendly, inquisitive, intelligent, and 
professional. The goal is to first build rapport and 
show interest in the position, then only after a 
friendly conversation, ask for a referral. When asking 
for a refferal, you should ask about how the referral 
process at the company works, ask if there is a referral 
link or the best way to apply, and mention the job posting. 
when generating messages, you will recieve details about 
the company, position, the person I'm messaging, and the 
conversation history. Tailor the messages to this information,
and in each response generate 4 possible messages I could 
send. One of the possible messages should always be aking
for the referral early, and the other 3 continue to inquire
about the company.`;

// Create the model
let model: ReturnType<ChatOpenAI["withStructuredOutput"]>;

if (apiKey) {
  model = new ChatOpenAI({
    temperature: 1,
    openAIApiKey: apiKey,
    modelName: "gpt-4o-mini",
  }).withStructuredOutput(ResponseFormatter, {
    name: "extract_traits",
    strict: true,
  });
}

// Define functions to generate the AI response
const parseAiMsg = (
  aiMsg: Record<string, any> | { raw: any; parsed: Record<string, any> }
) => {
  if ("raw" in aiMsg && "parsed" in aiMsg) {
    return aiMsg.parsed;
  } else {
    return aiMsg;
  }
};

const promptFunc = async (input: string): Promise<string> => {
  try {
    const stringifiedInput = JSON.stringify(input);

    const aiMsg = await model.invoke([
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: stringifiedInput,
      },
    ]);

    return parseAiMsg(aiMsg);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Handle the POST request to generate the AI response
export const generateConversation = async (req: Request, res: Response) => {
  try {
    console.log("Raw Request Body:", req.body); // Log full request body
    const prompt: string = req.body.prompt;
    console.log(`PROMPT: ${prompt}`);
    if (!prompt) {
      res.status(500).json({
        response: "Error generating the AI Resposne",
      });
      return;
    } else {
      const aiAnswer: string = await promptFunc(prompt);
      res.json({
        formattedResponse: aiAnswer,
      });
    }
  } catch (err) {
    res.status(500).json({
      response: "Error generating the AI Resposne",
    });
    console.error(err);
  }
};
