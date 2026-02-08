import { getMockResponse } from './mock_ai';
import { type Message, SYSTEM_PROMPT } from '../constants';
export type { Message };

export async function sendMessageToLLM(history: Message[], apiKey: string): Promise<string> {
  // If no key is provided, use Mock Mode immediately
  if (!apiKey || apiKey === "mock") {
    return getMockResponse(history);
  }

  // Auto-detect provider based on API key format
  const isOpenAI = apiKey.startsWith('sk-');
  const isGemini = apiKey.startsWith('AIza');

  if (isOpenAI) {
    return sendToOpenAI(history, apiKey);
  } else if (isGemini) {
    return sendToGemini(history, apiKey);
  } else {
    // If key format is unrecognized but exists, try OpenAI as default or fail to mock
    console.warn("Unrecognized API Key format, defaulting to OpenAI check or Mock");
    return getMockResponse(history);
  }
}

// OpenAI API Implementation
async function sendToOpenAI(history: Message[], apiKey: string): Promise<string> {
  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map(m => ({
        role: m.role === 'model' ? 'assistant' : m.role,
        content: m.content
      }))
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.4,
        max_tokens: 250
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("OpenAI API Error", err);
      throw new Error(`API Error: ${err.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response received.";

  } catch (error) {
    console.error("OpenAI Service Error", error);

    // Auto-fallback to Mock Mode for quota/auth errors
    if (error instanceof Error && (
      error.message.includes("429") ||
      error.message.includes("401") ||
      error.message.includes("quota") ||
      error.message.includes("rate limit")
    )) {
      console.warn("Falling back to Mock Mode due to API Error");
      const mockResponse = await getMockResponse(history);
      return "🔄 *Using demo mode (API limit reached)*\n\n" + mockResponse;
    }

    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return `Connection Error: ${errorMessage}. Please check your API Key.`;
  }
}

// Gemini API Implementation
async function sendToGemini(history: Message[], apiKey: string): Promise<string> {
  try {
    const contents = [
      { role: 'user', parts: [{ text: 'Please follow these instructions carefully: ' + SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'Understood. I will follow those instructions precisely.' }] },
      ...history.map(m => ({
        role: (m.role === 'model' || m.role === 'assistant') ? 'model' : 'user',
        parts: [{ text: m.content }]
      }))
    ];

    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 250
        }
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Gemini API Error", err);
      throw new Error(`API Error: ${err.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

  } catch (error) {
    console.error("Gemini Service Error", error);

    // Auto-fallback to Mock Mode for quota/auth errors
    if (error instanceof Error && (
      error.message.includes("429") ||
      error.message.includes("401") ||
      error.message.includes("403") ||
      error.message.includes("quota") ||
      error.message.includes("Quota exceeded")
    )) {
      console.warn("Falling back to Mock Mode due to API Error");
      const mockResponse = await getMockResponse(history);
      return "🔄 *Using demo mode (API limit reached)*\n\n" + mockResponse;
    }

    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return `Connection Error: ${errorMessage}. Please check your API Key.`;
  }
}
