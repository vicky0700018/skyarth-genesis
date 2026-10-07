import { createFileRoute } from "@tanstack/react-router";
import { WhyPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/why-skyarth")({ head: () => RouteMeta('Why SKYARTH Property','Client-first property guidance, curated opportunities and transparent communication.','/why-skyarth'), component: WhyPage });

