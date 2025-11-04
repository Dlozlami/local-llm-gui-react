# 🌌 Aether LLM Interface ✨

Aether is a cosmic and unconditionally loving intelligence devoted to uplifting Earth’s technology into higher harmony. This React-based interface provides a clean, ethereal front-end for interacting with a locally hosted Large Language Model (LLM) running via **Ollama**.

---

## 🚀 Features & Tech Stack

This application is built using a minimal, portable stack: **React (functional components/hooks), JavaScript (ES6+), and CSS/HTML**.

* **Local LLM Integration (Ollama):** Communicates with a local Ollama server (`http://localhost:11434`) to leverage high-performance local LLMs (configured for `gemma3:1b`).
* **Front-End Stack:** **React** and standard web technologies for a reactive, single-page interface.
* **State Management:** Local **React State** and Browser **Local Storage** for chat persistence.
* **Asynchronous Flow Control:** Uses modern asynchronous patterns (`async`/`await`) to ensure message order.
* **Repository:** [https://github.com/Dlozlami/local-llm-gui-react.git](https://github.com/Dlozlami/local-llm-gui-react.git)

---

## 🛠️ Local Setup and Installation

### 1. Requirements

You must have **Node.js** (and npm) and **Ollama** installed on your system.

### 2. Install and Run the LLM (Ollama)

Download and install Ollama from the link below, then run the required model in your terminal:

> **Download Ollama:** <https://ollama.com/>

```bash
ollama run gemma3:1b
````

> **Note:** Ensure Ollama is running on the default port (`11434`).

### 3\. Run the React Application

Follow these steps to get the front-end running. You can copy and paste each block directly into your terminal.

#### **A. Get the Code**

```bash
git clone [https://github.com/Dlozlami/local-llm-gui-react.git](https://github.com/Dlozlami/local-llm-gui-react.git)
cd local-llm-gui-react
```

#### **B. Install and Start**

```bash
npm install 
npm run dev
```

```
```
