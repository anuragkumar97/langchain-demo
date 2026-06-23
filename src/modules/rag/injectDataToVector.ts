import { loadDocument } from "./loadDocuments";
import { splitDocument } from "./chunks";
import { createVectorStore } from "./vectorStore";

async function run() {
  const content = await loadDocument();

  const docs = await splitDocument(content);

  await createVectorStore(docs);

  console.log("Documents indexed");
}

run();