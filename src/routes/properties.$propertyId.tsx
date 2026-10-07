import {createFileRoute} from "@tanstack/react-router";
import {PropertyDetailPage} from "@/components/skyarth/details";
import {RouteMeta} from "@/components/skyarth/ui";
export const Route=createFileRoute("/properties/$propertyId")({head: ({params})=>RouteMeta("Properties Details","Explore this selected SKYARTH Property opportunity and request more information.",`/properties/${params.propertyId}`),component: Page});
function Page(){ const {propertyId}=Route.useParams(); return <PropertyDetailPage id={propertyId}/>; }
