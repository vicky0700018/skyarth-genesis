import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/services")({ head: () => RouteMeta('Our Real Estate Services','Buying, selling, investment, evaluation and visit coordination, built around your property goals.','/services'), component: ServicesPage });

