import 'dotenv/config';

import { askKnowledgeBase } from '../llmWithRag/ragChain';

async function main() {
  const answer = await askKnowledgeBase(
    'What is required for onboarding?'
  );

  console.log(answer);
}

main();