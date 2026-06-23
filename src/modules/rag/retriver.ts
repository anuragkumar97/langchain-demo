// retrieve.ts

import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function retrieve(query: string) {
  const vectorStore = new Chroma(
    new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
    }),
    {
      collectionName: "customer-onboarding",
      url: "http://localhost:8000",
    }
  );

  const retriever = vectorStore.asRetriever();

  const docs = await retriever.invoke(query);

  return docs;
}