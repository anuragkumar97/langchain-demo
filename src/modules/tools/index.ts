// tools/index.ts

import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { askKnowledgeBase } from "../llmWithRag/ragChain";

import { getCustomer, createCustomer } from "./toolsController";

export const getCustomerTool = tool(
  async ({ customerId }) => {
    return await getCustomer(customerId);
  },
  {
    name: "get_customer",
    description: "Get customer details by customer id",
    schema: z.object({
      customerId: z.string(),
    }),
  }
);

export const createCustomerTool = tool(
  async ({ name }) => {
    return JSON.stringify(await createCustomer(name));
  },
  {
    name: "create_customer",
    description: "Create a new customer",
    schema: z.object({
      name: z.string(),
    }),
  }
);

export const knowledgeBaseTool = tool(
  async ({ question }) => {
    return await askKnowledgeBase(question);
  },
  {
    name: "knowledge_base",
    description:
      "Search company onboarding and policy documents",
    schema: z.object({
      question: z.string(),
    }),
  }
);

export const tools = [
  getCustomerTool,
  createCustomerTool,
  knowledgeBaseTool
];