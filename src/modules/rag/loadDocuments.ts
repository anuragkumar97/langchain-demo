import fs from "fs";
import path from "path";

export async function loadDocument() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "modules",
    "rag",
    "docs",
    "onboarding.txt"
  );

  return fs.readFileSync(filePath, "utf8");
}