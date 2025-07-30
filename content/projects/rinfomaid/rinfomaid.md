---
title: "Rinfomaid"
date: 2025-07-29T23:06:09-04:00
draft: true
---

### Rinfomaid: A textual AI application, markdown archival and RAG document query system written in Rust. Neat-o!, right?

- GitHub: [Rinfomaid](https://github.com/developmentAC/rinfomaid)

![logo](/images/projects/rinfomaid/graphics/rinfomaid_logo.png )


Date: 16 July 2025

Oliver Bonham-Carter

Email: obonhamcarter at allegheny.edu

MIT Licence

The RinfoMaid is a Rust command-line tool that interacts with the Ollama API to generate text using AI models. The program can either take a prompt from the command line, a prompt file, or ask the user to enter a prompt. It then sends the prompt to the Ollama API and retrieves a generated response, which is saved to a specified output file in markdown format.

![logo](/images/projects/rinfomaid/graphics/screenshot.png)

NEW and Cool: RinfoMaid now includes Agentic RAG (Retrieval-Augmented Generation) functionality! This allows you to build a local knowledge base from your documents (PDF, TXT, MD files) and query them using AI. The system can answer questions using your local documents, saves responses to the 0_out/ directory with automatic file numbering, and falls back to Ollama models when needed.

Why did you work on this project? This project is a learning tool for how to programming nifty AI stuff in Rust. Cool, right?

## Notable Features

This project demonstrates how to interact with an AI model to generate text using the Ollama API, enhanced with powerful RAG (Retrieval-Augmented Generation) capabilities. The tool is flexible, allowing users to:

- **Generate text** using various Ollama models with prompts from command line, files, or interactive input
- **Build local knowledge bases** from PDF, TXT, and MD documents
- **Query local documents** using intelligent search with TF-IDF scoring
- **Get source attribution** with relevance scores for transparency
- **Seamlessly integrate** local knowledge with cloud-based AI models

The RAG system makes RinfoMaid particularly powerful for:

- **Document Q&A**: Answer questions about your specific documents
- **Research**: Quickly find relevant information across multiple documents
- **Knowledge Management**: Build searchable repositories of your documents
- **Educational Use**: Learn about AI, document processing, and information retrieval

All results are saved in markdown format, making it easy to view and share the generated responses.

If you have any issues or suggestions, feel free to open an issue in the repository or submit a pull request.
