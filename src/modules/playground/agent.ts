import 'dotenv/config';

import { agent } from '../agent';

async function main() {
  const result = await agent.invoke({
    messages: [
      {
        role: 'user',
        content: 'Get customer CUST-1001',
      },
    ],
  });

  console.log(
    result.messages.at(-1)?.content
  );
}

main();