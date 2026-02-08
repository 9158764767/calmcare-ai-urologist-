# AI Urologist - Kidney Stone Support

A patient-facing AI chatbot designed to help kidney stone patients understand their condition, treatments (like ESWL), and recovery process in a calm, reassuring way.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- OpenAI API Key OR Google Gemini API Key

### 2. Installation
```bash
npm install
```

### 3. Configuration
Create a `.env` file:
```
VITE_API_KEY=your_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## 🛡️ Fallback Demo Mode
If the API quota is exceeded or the internet is disconnected, the app automatically switches to **Demo Mode**. It uses a built-in Mock AI service to provide realistic, pre-written responses for common kidney stone questions, ensuring the app is always demonstrating value.

## 🏥 Disclaimer
This AI is for educational purposes only and does **not** provide medical advice. Always consult a doctor for diagnosis and treatment.
