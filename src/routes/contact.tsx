import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/contact")({ head: () => RouteMeta('Contact SKYARTH Property','Discuss your property requirements with SKYARTH Property. Call +91 9763984322 or submit a demo enquiry.','/contact'), component: ContactPage });

