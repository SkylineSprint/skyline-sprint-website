'use client'
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "In short tell me what you can do for me?",
    "In short what services does Skyline Sprint offers?",
    "In short provide Skyline Sprint's value propositions"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Improved API call with better error handling and debugging
  const callAPI = async (message) => {
    try {
      console.log('Making API call to:', 'https://skyline-chatbot.vercel.app/api/ask');
      console.log('Message:', message);
      
      const response = await fetch('https://skyline-chatbot.vercel.app/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      // Handle different possible response formats
      let responseText = null;
      if (data.response) {
        responseText = data.response;
      } else if (data.answer) {
        responseText = data.answer;
      } else if (data.reply) {
        responseText = data.reply;
      } else if (data.message) {
        responseText = data.message;
      } else if (data.text) {
        responseText = data.text;
      } else if (typeof data === 'string') {
        responseText = data;
      } else {
        console.error('Unknown response format:', data);
        throw new Error(`Invalid response format. Expected response field but got: ${JSON.stringify(Object.keys(data))}`);
      }
      
      return responseText;
    } catch (error) {
      console.error('API Error Details:', error);
      
      // More specific error messages
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Network error: Unable to connect to the AI service. Please check your internet connection.');
      } else if (error.message.includes('404')) {
        throw new Error('API endpoint not found. The service may be temporarily unavailable.');
      } else if (error.message.includes('500')) {
        throw new Error('Server error. The AI service is experiencing issues.');
      } else if (error.message.includes('timeout')) {
        throw new Error('Request timeout. The AI service is taking too long to respond.');
      } else {
        throw new Error(`AI service error: ${error.message}`);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setError(null);
  };

  const simulateTyping = (text, callback) => {
    setIsTyping(true);
    let currentText = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        callback(currentText);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 30);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setError(null);
    
    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Call API
      const response = await callAPI(userMessage);
      
      // Add AI message with typing animation
      const aiMessage = {
        id: Date.now() + 1,
        text: '',
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      
      // Simulate typing effect
      simulateTyping(response, (currentText) => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === aiMessage.id 
              ? { ...msg, text: currentText }
              : msg
          )
        );
      });
      
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: `Sorry, I encountered an error: ${error.message}`,
        sender: 'ai',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInputValue('');
    setIsLoading(false);
    setIsTyping(false);
    setError(null);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Fixed Chat Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <div
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 md:w-20 md:h-20 bg-[#8e1a7d] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 after:content-[''] after:absolute after:-bottom-3 after:-right--10 after:w-0 after:h-0 after:border-t-[16px] md:after:border-t-[20px] after:border-t-[#8e1a7d] after:border-l-[16px] md:after:border-l-[20px] after:border-l-transparent"
        >
          <Image
            src="/images/excited.png"
            alt="AI Chat Icon"
            width={48}
            height={48}
            className="animate-bounce md:w-12 md:h-12 "   
          />
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex p-4 md:items-center md:justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-lg mx-auto ">
            <div 
              className="relative rounded-3xl shadow-2xl overflow-hidden h-[600px] flex flex-col animate-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-300"
              style={{
                background: 'linear-gradient(to top, #5a1855 0%, #080808 100%)',
              }}
            >
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Sparkles className="text-white" size={24} />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                    <h2 className="text-white text-xl font-medium">Ask our AI Anything</h2>
                  </div>
                  
                  {messages.length > 0 && (
                    <button
                      onClick={resetChat}
                      disabled={isLoading || isTyping}
                      className="text-white/60 hover:text-white text-sm px-6 mx-4 py-1 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      Clear
                    </button>
                  )}
                </div>
                
                {/* Error Display */}
                {error && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {messages.length === 0 ? (
                  /* Suggestions - Only show when no messages */
                  <div className="p-6 space-y-4">
                    <p className="text-white/80 text-sm mb-4 font-medium">
                      Suggestions on what to ask Our AI
                    </p>
                    <div className="space-y-3">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full p-4 rounded-2xl text-left text-white/90 text-sm transition-all duration-200 hover:scale-[1.02] hover:text-white group"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="leading-relaxed">{suggestion}</span>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Send size={16} className="text-white/60" />
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Messages Area */
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {message.sender === 'ai' && (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                            message.isError 
                              ? 'bg-red-500' 
                              : 'bg-gradient-to-r from-pink-500 to-purple-600'
                          }`}>
                            {message.isError ? (
                              <AlertCircle size={16} className="text-white" />
                            ) : (
                              <Bot size={16} className="text-white" />
                            )}
                          </div>
                        )}
                        
                        <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                          <div
                            className={`px-4 py-3 rounded-2xl ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                : message.isError
                                ? 'bg-red-500/20 text-red-200 backdrop-blur-sm border border-red-500/30'
                                : 'bg-white/10 text-white backdrop-blur-sm border border-white/10'
                            } ${message.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                          <p className={`text-xs text-white/50 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                        
                        {message.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <User size={16} className="text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Loading Animation */}
                    {isLoading && (
                      <div className="flex gap-3 justify-start animate-in slide-in-from-bottom-2 duration-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white/10 text-white backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
                          <div className="flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin" />
                            <span className="text-sm">Thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white/10 text-white backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input Section */}
              <div className="p-6 border-t border-white/10">
                <div className="relative">
                  <div 
                    className="relative rounded-2xl overflow-hidden"
                    style={{ background: 'white' }}
                  >
                    <input
                      type="text"
                      placeholder="Ask me anything..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !isLoading && !isTyping && inputValue.trim()) {
                          handleSubmit(e);
                        }
                      }}
                      disabled={isLoading || isTyping}
                      className="w-full text-black placeholder-black/60 px-4 py-4 pr-16 outline-none text-sm disabled:opacity-50"
                      style={{
                        background: 'transparent',
                        WebkitAppearance: 'none',
                        appearance: 'none'
                      }}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!inputValue.trim() || isLoading || isTyping}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-400/10 rounded-full blur-xl" />
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}