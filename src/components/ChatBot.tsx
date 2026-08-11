"use client"
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Synergy Access assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date('2024-01-01T00:00:00.000Z') // Use a fixed date to prevent hydration mismatch
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simple bot response logic
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('boom barrier') || input.includes('barrier')) {
      return 'Our Automatic Boom Barriers are perfect for vehicle access control. They can extend up to 7 meters and are ideal for parking lots, toll booths, and security checkpoints. Would you like to know more about specifications or request a quote?';
    }
    
    if (input.includes('parking') || input.includes('parking system')) {
      return 'We offer comprehensive parking management systems including RFID-based access control, payment integration, and real-time monitoring. Perfect for commercial complexes and residential areas. Would you like to see our parking solutions?';
    }
    
    if (input.includes('quote') || input.includes('price')) {
      return 'I can help you get a custom quote! Please let me know: 1) Which product you\'re interested in, 2) Installation location, 3) Any specific requirements. You can also fill out our quote form on the product page.';
    }
    
    if (input.includes('support') || input.includes('help')) {
      return 'For technical support, you can: 1) Create a support ticket in our portal, 2) Call us at +91 99993 39265, 3) Email business@synergy-access.com. Our team responds within 24 hours.';
    }
    
    return 'I can help you with product information, quotes, technical support, and more. Try asking about our boom barriers, parking systems, or how to get a quote!';
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 text-white transition-colors bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transform duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="flex flex-col bg-white rounded-lg shadow-xl w-80 h-96 border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white bg-blue-500 rounded-t-lg">
            <h3 className="font-semibold">Synergy Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-blue-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;