"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const questions = [
  "How do I sell my license?",
  "What licenses do you accept?",
  "How long does payment take?",
];

const answers: { [key: string]: string } = {
  "How do I sell my license?":
    "Just upload your license, get a valuation, and accept the offer to get paid.",
  "What licenses do you accept?":
    "We accept Windows, Office, Adobe, Antivirus, and more.",
  "How long does payment take?":
    "Payouts are processed within 24–48 hours after approval.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg: { role: "user" | "assistant"; content: string } = {
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const response =
        answers[input.trim()] || "Sorry, I don't have an answer for that yet.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-8 right-8 z-50 bg-[#5c3cf9] hover:bg-[#675fa8] text-[#e6e6ed] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-3xl transition-all"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>
      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-80 max-w-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-[#4d4d7a] text-white px-4 py-3 font-bold text-lg">
            License Assistant
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-80">
            {messages.length === 0 && (
              <div className="text-[#4d4d7a] text-sm mb-2">
                Hi! Ask me anything or try a quick question:
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-xl max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-[#c5baff] text-[#4d4d7a]"
                      : "bg-[#f1f3fa] text-[#4d4d7a]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {questions.map((q) => (
                <button
                  key={q}
                  className="bg-[#e8f9ff] text-[#4d4d7a] px-3 py-1 rounded-full text-xs hover:bg-[#c4d9ff] transition"
                  onClick={() => {
                    setInput(q);
                  }}
                  type="button"
                >
                  {q}
                </button>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                className="flex-1 border rounded px-2 py-1 text-[#4d4d7a] focus:outline-none focus:ring-2 focus:ring-[#c5baff]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#c5baff] text-[#4d4d7a] px-3 py-1 rounded hover:bg-[#c4d9ff] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
      <style>
        {`
        .animate-fade-in {
          animation: fadeInUp 0.3s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </>
  );
};
export default ChatWidget;
