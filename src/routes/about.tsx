import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/about")({ head: () => RouteMeta('About SKYARTH Property','Professional real-estate guidance and a thoughtful client-first approach to property decisions.','/about'), component: AboutPage });

