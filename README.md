# LangChain TypeScript Demo

A hands-on project demonstrating the core building blocks of modern AI applications using LangChain, TypeScript, OpenAI, Tool Calling, and Retrieval-Augmented Generation (RAG).

## Features

### Tool Calling

The agent can automatically decide when to invoke tools.

Available tools:

* `get_customer` - Fetch customer details
* `create_customer` - Create a new customer
* `knowledge_base` - Search company knowledge documents

### RAG (Retrieval-Augmented Generation)

Documents are:

1. Loaded from local text files
2. Split into chunks
3. Converted into embeddings
4. Stored in a vector database
5. Retrieved based on semantic similarity
6. Passed to the LLM as context

### AI Agent

The agent can dynamically decide whether to:

* Search the knowledge base
* Fetch customer information
* Create a customer
* Respond directly

Example:

User: What are onboarding requirements?

Agent:

* Calls knowledge_base tool
* Retrieves relevant documents
* Generates an answer

User: Get customer CUST-1001

Agent:

* Calls get_customer tool
* Retrieves customer data
* Generates a response

---

## Tech Stack

* TypeScript
* Node.js
* LangChain v1
* OpenAI
* ChromaDB
* Zod


## Installation

Clone repository:

```bash
git clone <repository-url>
cd langchain-demo
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create `.env`

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## Index Documents

Load documents into the vector database:

```bash
npx tsx src/modules/rag/injectDataToVector.ts
```

---

## Run RAG Retrieval

```bash
npx tsx src/playground/rag.ts
```

---

## Run LLM + RAG

```bash
npx tsx src/playground/llm.ts
```

---

## Run Agent

```bash
npx tsx src/playground/agent.ts
```

---

## Concepts Demonstrated

### Tool Calling

The LLM selects a tool and generates structured arguments.

```json
{
  "tool": "get_customer",
  "customerId": "CUST-1001"
}
```

### Retrieval-Augmented Generation (RAG)

```text
User Query
    ↓
Embedding
    ↓
Vector Search
    ↓
Relevant Chunks
    ↓
LLM
    ↓
Answer
```

### Agent Architecture

```text
                User
                  ↓
               Agent
             /       \
            /         \
           ↓           ↓
      Knowledge     Tools
        Base
            \       /
             \     /
               LLM
                ↓
             Response
```

---

## Future Enhancements

* Conversation Memory
* Persistent Chat History
* LangGraph Integration
* Multi-Agent Workflows
* MCP Tool Integration
* PostgreSQL Tooling
* REST API Tooling
* Streaming Responses
* LangSmith Tracing and Observability

---

## Learning Goal

This project is designed to help understand the progression:

```text
LLM
 ↓
Tool Calling
 ↓
RAG
 ↓
Agent
 ↓
Memory
 ↓
LangGraph
 ↓
Production AI Systems
```
