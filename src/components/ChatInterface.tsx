import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Shield, Activity, HelpCircle } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { sendMessageToLLM, type Message } from '../services/ai';

const QUICK_ACTIONS = [
    { label: "What is kidney stone surgery?", icon: HelpCircle, question: "What are the common kidney stone surgeries?" },
    { label: "I am scared", icon: Shield, question: "I am feeling very anxious about my procedure." },
    { label: "Recovery tips", icon: Activity, question: "What is recovery like after ureteroscopy?" },
];

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', content: "Hey! 👋 I am your **AI Urologist**. You can ask me any questions about your kidney stone health conditions! Stay safe, stay healthy! 💙" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMsg: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        // Get API Key from environment or prompt (for demo)
        const apiKey = import.meta.env.VITE_API_KEY || localStorage.getItem('calmcare_api_key') || '';

        // Minimal "fake" delay for realism if no API key yet to show UI state, 
        // but sendMessageToLLM handles the error.

        try {
            const responseText = await sendMessageToLLM([...messages, userMsg], apiKey);
            const botMsg: Message = { role: 'model', content: responseText };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', content: "I apologize, but I'm having trouble connecting right now." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(input);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-3xl h-[85vh] md:h-[90vh] glass-container relative shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="p-4 border-b border-white/30 flex items-center bg-white/20 backdrop-blur-md z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 flex items-center justify-center text-white shadow-md">
                    <Sparkles size={20} />
                </div>
                <div className="ml-3">
                    <h1 className="font-bold text-lg text-slate-800">AI Urologist</h1>
                    <p className="text-xs text-slate-600">Your Kidney Stone Health Assistant</p>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} role={msg.role} content={msg.content} />
                ))}

                {isLoading && (
                    <div className="flex items-center space-x-2 p-4 animate-pulse">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions (only show if few messages or idle) */}
            {messages.length < 4 && !isLoading && (
                <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                    {QUICK_ACTIONS.map((action, i) => (
                        <button
                            key={i}
                            onClick={() => handleSend(action.question)}
                            className="flex items-center space-x-1 whitespace-nowrap bg-white/60 hover:bg-white/90 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 transition shadow-sm border border-white/50"
                        >
                            <action.icon size={14} className="text-blue-500" />
                            <span>{action.label}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white/30 border-t border-white/40">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your question..."
                        className="w-full pl-4 pr-12 py-3 rounded-xl border border-white/50 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-inner text-slate-700 placeholder-slate-400"
                        disabled={isLoading}
                    />
                    <button
                        onClick={() => handleSend(input)}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 text-white rounded-lg transition-colors shadow-sm"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-[10px] text-slate-500">
                        ⚠ I am an AI, not a doctor. Please contact your physician for medical advice.
                    </p>
                </div>
            </div>
        </div>
    );
}
