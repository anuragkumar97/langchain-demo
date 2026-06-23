import 'dotenv/config';

import { retrieve } from '../rag/retriver';

async function main() {
  const docs = await retrieve(
    'What are onboarding requirements?'
  );

  console.log(docs);
}

main();