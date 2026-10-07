import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/projects/")({ head: () => RouteMeta('Selected Property Opportunities','Discover a curated portfolio of distinctive residential and commercial property projects.','/projects'), component: ProjectsPage });

