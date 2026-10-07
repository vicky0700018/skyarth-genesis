import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/")({ head: () => RouteMeta('Find the Right Property. Make the Right Move.','Discover premium residential, commercial, investment and land opportunities with SKYARTH Property.','/'), component: HomePage });

