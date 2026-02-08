# calmcare-ai-urologist-
Ethical AI medical assistant for kidney stone education with built-in safety guardrails built with React and TypeScript. Supports OpenAI and Gemini, includes strict medical safety guardrails, mock AI fallback mode, and a patient-friendly chat interface.
# CalmCare – AI Urologist Assistant 💬🩺

**CalmCare** is a web-based AI chat application that provides **safe, educational information** related to **kidney stone health**.  
It simulates an AI urologist to help users understand symptoms, prevention, and recovery — while **strictly avoiding diagnosis or personalized medical advice**.

Built with strong **medical AI safety guardrails**, CalmCare is ideal for healthcare AI demos, prototypes, and responsible AI experiments.

---

## 📸 Screenshots

> Add screenshots to `/screenshots` folder and update paths below

| Chat Interface | Safety Guardrails |
|---------------|------------------|
| ![Chat UI](screenshots/chat-ui.png) | ![Safety](screenshots/safety-rules.png) |

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
VITE_OPENAI_API_KEY=your_openai_key
VITE_GEMINI_API_KEY=your_gemini_key
###Run Locally
npm run dev

http://localhost:5173
```bash
npm install
