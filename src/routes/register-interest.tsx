import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/register-interest")({
  beforeLoad: () => {
    throw redirect({ to: "/book-a-call" });
  },
});
