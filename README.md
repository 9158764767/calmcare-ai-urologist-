# CalmCare – AI Urologist Assistant 💬🩺
![Stars](https://img.shields.io/github/stars/9158764767/calmcare-ai-urologist-?style=social)
![Issues](https://img.shields.io/github/issues/9158764767/calmcare-ai-urologist-)
![License](https://img.shields.io/github/license/9158764767/calmcare-ai-urologist-)

**CalmCare** is a web-based AI chat application that provides **safe, educational information** related to **kidney stone health**.  
It simulates an AI urologist to help users understand symptoms, prevention, and recovery — while **strictly avoiding diagnosis or personalized medical advice**.

Built with strong **medical AI safety guardrails**, CalmCare is ideal for healthcare AI demos, prototypes, and responsible AI experiments.

---

## 📸 Screenshots

| Chat Interface | Safety Guardrails |
|---------------|------------------|
| ![Chat UI](https://github.com/9158764767/calmcare-ai-urologist-/blob/main/Screenshots/chat-ui.png) | ![Safety](https://github.com/9158764767/calmcare-ai-urologist-/blob/main/Screenshots/safety-rules.png) |

---

## ✨ Features

- 🤖 AI-powered chat assistant focused on kidney stone education
- 🧠 Multi-AI provider support:
  - OpenAI (GPT-3.5)
  - Google Gemini
- 🔄 Automatic fallback to **Mock AI mode**
- 🛑 Medical safety rules enforced:
  - No diagnosis
  - No treatment or medication advice
  - Redirects to doctors for personal or emergency cases
- ⏱️ Concise responses (under 40 words)
- 😌 Anxiety-aware, reassuring tone
- 📱 Responsive, mobile-friendly UI
- ⚠️ Medical disclaimer always visible

---
## 🎯 Problem This Project Solves

Patients searching online for kidney stone symptoms often encounter:
- Anxiety-inducing or misleading information
- Unsafe AI chatbots giving medical advice
- No clear guidance on when to consult a doctor

This project explores how **AI can be used responsibly in healthcare**
by providing **education without diagnosis or treatment advice**.

## 🧠 Key Engineering Highlights

- Multi-provider AI architecture (OpenAI & Gemini)
- Centralized AI safety validation layer
- Automatic fallback to mock AI mode (no API dependency)
- Prompt engineering with response length & tone control
- Clean separation of UI, services, and safety logic
- Production-ready frontend with React + TypeScript

## 🛡️ Medical AI Safety & Ethics

This project intentionally restricts AI behavior:

✔ No diagnosis  
✔ No medication or dosage advice  
✔ No interpretation of medical reports  
✔ Emergency symptoms trigger professional referral  

These guardrails are enforced at the **application logic and prompt level**,
not left to the AI model alone.

## 🚀 What This Project Demonstrates

- Responsible AI design in healthcare contexts
- Ability to translate ethical requirements into technical constraints
- Frontend engineering with modern React patterns
- API integration with fail-safe fallback strategies
- Clear communication through UI and documentation

## 💡 Solution Overview

CalmCare is an **AI-powered medical education chatbot** that simulates
an AI urologist while enforcing **strict medical safety guardrails**.

It provides:
- General educational answers only
- Emotional reassurance for anxious users
- Automatic escalation to professional care when needed

The system is designed to demonstrate **ethical AI behavior in healthcare applications**.

## 🧱 Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI APIs:** OpenAI, Google Gemini
- **Architecture:** Component-based, service-oriented design

---

## 🛡️ AI Safety & Ethics

CalmCare is intentionally limited to **general medical education only**.

The assistant will:
- Refuse to interpret lab reports or scans
- Refuse medication or dosage recommendations
- Encourage consulting licensed healthcare professionals

This ensures **ethical and responsible AI usage** in healthcare.

---

## 👤 Author

**Abhishek Hirve**  
AI/ML Engineer | Data Professional | Healthcare AI Enthusiast  

This project was built as a demonstration of ethical AI system design
and production-quality frontend engineering.

---
## 🧪 Mock / Demo Mode

If no API key is configured, the app runs in **Mock AI mode**, enabling:
- UI demonstrations
- Development without API costs
- Offline testing

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
npm install
Run Locally
npm run dev


App runs at:

http://localhost:5173

🔐 Environment Variables
VITE_OPENAI_API_KEY=your_openai_key
VITE_GEMINI_API_KEY=your_gemini_key


No keys → automatic Mock mode.

⚠️ Disclaimer

This project is not a medical device and does not provide medical advice.
For medical concerns, always consult a qualified healthcare professional.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
