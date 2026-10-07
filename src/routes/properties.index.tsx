import { createFileRoute } from "@tanstack/react-router";
import { PropertiesPage } from "@/components/skyarth/public-pages";
import { RouteMeta } from "@/components/skyarth/ui";
export const Route = createFileRoute("/properties/")({ validateSearch: (search: Record<string, unknown>) => ({category: typeof search.category === "string" ? search.category : "All"}),
head: () => RouteMeta('Explore Properties','Explore and filter residential, commercial, investment and plot opportunities in Pune and Mumbai.','/properties'), component: Page });
function Page() { const {category}=Route.useSearch(); return <PropertiesPage category={category}/>; }
