import { createAgent } from "langchain";
import { tools } from "../tools";
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0,
});

export const agent = createAgent({
  model: llm,
  tools,
});