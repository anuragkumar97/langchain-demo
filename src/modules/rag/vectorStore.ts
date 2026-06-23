// rag/vectorStore.ts

import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function createVectorStore(
  docs: any[]
) {
  return await Chroma.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
    }),
    {
      collectionName: "customer-onboarding",
      url: "http://localhost:8000",
    }
  );
}