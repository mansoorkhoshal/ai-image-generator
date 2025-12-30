import express, { response } from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/", (req, res) => {
  res.send("Hello from STACKSON.AI!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImg({
      prompt,
      n: 1,
      size: "1024x1024",
      response_formate: "b64_json",
    });
  } catch (error) {}
});

export default router;
