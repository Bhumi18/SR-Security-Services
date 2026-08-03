import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/why-choose-us")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      hash: "why-choose-us",
      replace: true,
    });
  },
});
