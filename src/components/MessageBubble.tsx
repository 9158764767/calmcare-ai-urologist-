import React from 'react';
import ReactMarkdown from 'react-markdown';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
    role: 'user' | 'model' | 'assistant' | 'system';
    content: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ role, content }) => {
    const isUser = role === 'user';

    return (
        <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            {!isUser && (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2 shadow-sm shrink-0">
                    <Bot size={18} className="text-blue-600" />
                </div>
            )}

            <div className={`
        max-w-[80%] rounded-[1.2rem] px-5 py-3 shadow-sm text-sm leading-relaxed
        ${isUser
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 rounded-bl-none border border-white/50'}
      `}>
                <div className="markdown-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>

            {isUser && (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ml-2 shadow-sm shrink-0">
                    <User size={18} className="text-blue-600" />
                </div>
            )}
        </div>
    );
};

export default MessageBubble;
