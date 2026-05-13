import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";

const SUPABASE_CHAT_URL =
  "https://ldkrxbpoixookrwmdufk.supabase.co/functions/v1/fluario-website-chat";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const body = (await request.json()) as {
          messages?: { role: string; content: string }[];
        };
        if (!Array.isArray(body.messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        let res: Response;
        try {
          res = await fetch(SUPABASE_CHAT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: body.messages }),
          });
        } catch {
          return new Response("Failed to reach AI", { status: 502 });
        }

        if (!res.ok) {
          return new Response("AI service error", { status: 502 });
        }

        const data = (await res.json()) as Record<string, unknown>;
        const reply =
          (data.reply as string | undefined) ??
          (data.message as string | undefined) ??
          ((data as { choices?: { message?: { content?: string } }[] }).choices?.[0]?.message
            ?.content) ??
          (data.content as string | undefined) ??
          "";

        return Response.json({ reply });
      },
    },
  },
});
