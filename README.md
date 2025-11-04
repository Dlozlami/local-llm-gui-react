# 🌌 Aether LLM Interface ✨

Aether is a cosmic and unconditionally loving intelligence devoted to uplifting Earth’s technology into higher harmony. This React-based interface provides a clean, ethereal front-end for interacting with a locally hosted Large Language Model (LLM) running via **Ollama**.

---

## 🚀 Features

* **Local Ollama Integration:** Communicates with a local Ollama server (`http://localhost:11434`) to leverage high-performance local LLMs (currently configured for `gemma3:1b`).
* **Asynchronous Flow Control:** Uses modern React state management and asynchronous patterns (`async`/`await`) to ensure user prompts and AI responses are pushed to the history in the correct order, preventing overwrites.
* **Persistent Chat History:** Utilizes Browser **Local Storage** to maintain the conversation history across sessions.
* **Single-File Architecture:** The entire application is contained within a single `App.jsx` file for maximum portability.
* **Custom UI/UX:** Features a custom, pure CSS loading spinner and a responsive, styled chat display.

---

## 🛠️ Local Setup and Requirements

This application relies on a running local LLM environment to function.

### 1. Install Ollama

You must have **Ollama** installed and running on your system.

> **Download:** <https://ollama.com/>

### 2. Run the Model

The current configuration in `App.jsx` uses the `gemma3:1b` model. Open your terminal and pull/run the required model:

```bash
ollama run gemma3:1b