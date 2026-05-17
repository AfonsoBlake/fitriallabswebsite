import { createFileRoute } from "@tanstack/react-router";

// This route is unused in the static SPA — the chat calls Supabase directly.
export const Route = createFileRoute("/api/chat")({
  component: () => null,
});
