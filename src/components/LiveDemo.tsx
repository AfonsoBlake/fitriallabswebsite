import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramDMMockup } from "./InstagramDMMockup";

const initialMessages: UIMessage[] = [
  {
    id: "seed-1",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Hey! I'm Fluario's AI assistant. Are you currently training, or looking for a coach?",
      },
    ],
  },
];

function messageText(m: UIMessage) {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

export function LiveDemo() {
  const [input, setInput] = useState("");
  const transport = useRef(new DefaultChatTransport({ api: "/api/chat" })).current;
  const { messages, sendMessage, status } = useChat({
    id: "fluario-demo",
    messages: initialMessages,
    transport,
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const isLoading = status === "submitted" || status === "streaming";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    void sendMessage({ text });
  };

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">See the AI in action.</h2>
          <p className="mt-4 text-lg" style={{ color: "#C4B8F0" }}>A live preview of how Fluario qualifies and converts leads — instantly.</p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(107,111,212,0.3)", background: "rgba(30,27,75,0.4)" }}>
              <div className="flex items-center justify-between border-b border-[rgba(107,111,212,0.2)] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" /></span>
                  <span className="font-mono-caps text-white">Fluario Assistant</span>
                </div>
                <span className="font-mono-caps rounded-full px-3 py-1" style={{ background: "rgba(107,111,212,0.15)", color: "#6B6FD4" }}>Live</span>
              </div>
              <div ref={scrollRef} className="flex flex-col gap-3 p-5 text-left h-[420px] overflow-y-auto">
                {messages.map((m) => (
                  <div key={m.id} className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${m.role === "assistant" ? "self-start" : "self-end"}`} style={m.role === "assistant" ? { background: "rgba(107,111,212,0.15)", color: "#FFFFFF" } : { background: "#6B6FD4", color: "#FFFFFF" }}>
                    {messageText(m) || (isLoading ? "…" : "")}
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="self-start max-w-[80%] rounded-2xl px-4 py-3 text-sm" style={{ background: "rgba(107,111,212,0.15)", color: "#C4B8F0" }}>
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C4B8F0] animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C4B8F0] animate-bounce [animation-delay:0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C4B8F0] animate-bounce [animation-delay:0.3s]" />
                    </span>
                  </div>
                )}
              </div>
              <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-[rgba(107,111,212,0.2)] p-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-[#C4B8F0]"
                  placeholder="Type a message..."
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !input.trim()} className="rounded-lg p-2.5 disabled:opacity-50" style={{ background: "#6B6FD4" }}>
                  <Send size={16} className="text-white" />
                </button>
              </form>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <InstagramDMMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
