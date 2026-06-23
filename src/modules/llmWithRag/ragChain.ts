// ragChain.ts

import { ChatOpenAI } from "@langchain/openai";
import { retrieve } from "../rag/retriver";

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0,
});

export async function askKnowledgeBase(
  question: string
) {
  const docs = await retrieve(question);

  const context = docs
    .map((doc) => doc.pageContent)
    .join("\n");

  const response = await llm.invoke(`
You are a company assistant.

Answer ONLY from the provided context.

Context:
${context}

Question:
${question}
`);

  return response.content;
}