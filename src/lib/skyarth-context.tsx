import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialProperties,initialServices,initialProjects,initialTestimonials,initialCategories,initialEnquiries,initialSettings,initialHero,initialAbout,initialWhy,type Entity,type Property } from './skyarth-data';
export type Collection = 'properties'|'services'|'projects'|'testimonials'|'categories'|'enquiries';
export type ContentKey='settings'|'hero'|'about'|'why';
type Store={properties:Property[];services:Entity[];projects:Entity[];testimonials:Entity[];categories:Entity[];enquiries:Entity[];settings:Entity;hero:Entity;about:Entity;why:Entity;loggedIn:boolean;setLoggedIn:(v:boolean)=>void;save:(collection:Collection,item:Entity)=>void;remove:(collection:Collection,id:string)=>void;updateContent:(key:ContentKey,item:Entity)=>void;addEnquiry:(item:Omit<Entity,'id'>)=>void};
const Context=createContext<Store|undefined>(undefined);
export function SkyarthProvider({children}:{children:ReactNode}) {
 const [data,setData]=useState({properties:initialProperties,services:initialServices,projects:initialProjects,testimonials:initialTestimonials,categories:initialCategories,enquiries:initialEnquiries,settings:initialSettings,hero:initialHero,about:initialAbout,why:initialWhy});
 const [loggedIn,setLoggedIn]=useState(false);
 const save=(collection:Collection,item:Entity)=>setData(prev=>({...prev,[collection]:prev[collection].some(x=>x.id===item.id)?prev[collection].map(x=>x.id===item.id?item:x):[...prev[collection],item]}));
 const remove=(collection:Collection,id:string)=>setData(prev=>({...prev,[collection]:prev[collection].filter(x=>x.id!==id)}));
 const updateContent=(key:ContentKey,item:Entity)=>setData(prev=>({...prev,[key]:item}));
 const addEnquiry=(item:Omit<Entity,'id'>)=>save('enquiries',{...item,id:`enquiry-${Date.now()}`,name:String(item.name||'Visitor'),date:new Date().toISOString().slice(0,10),status:'New'});
 return <Context.Provider value={{...data,loggedIn,setLoggedIn,save,remove,updateContent,addEnquiry}}>{children}</Context.Provider>;
}
export function useSkyarth(){const value=useContext(Context);if(!value)throw new Error('SkyarthProvider missing');return value;}
