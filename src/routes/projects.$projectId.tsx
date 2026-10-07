import {createFileRoute} from "@tanstack/react-router";
import {ProjectDetailPage} from "@/components/skyarth/details";
import {RouteMeta} from "@/components/skyarth/ui";
export const Route=createFileRoute("/projects/$projectId")({head: ({params})=>RouteMeta("Projects Details","Explore this selected SKYARTH Property opportunity and request more information.",`/projects/${params.projectId}`),component: Page});
function Page(){ const {projectId}=Route.useParams(); return <ProjectDetailPage id={projectId}/>; }
