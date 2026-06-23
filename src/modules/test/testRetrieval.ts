import 'dotenv/config';

import { askKnowledgeBase } from "../llmWithRag/ragChain";
import { retrieve } from "../rag/retriver";
import { agent } from "../agent";


async function main() {
  const docs = await retrieve(
    "What are onboarding requirements?"
  );

  console.log(docs);
}

async function askLlm(){
    const answer = await askKnowledgeBase(
  "What is required for onboarding?"
);
console.log(answer);
}

async function askAgent() {
  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content:
          "Get customer CUST-1001",
      },
    ],
  });

  console.log(result.messages[result.messages.length - 1].content);
}

askAgent();