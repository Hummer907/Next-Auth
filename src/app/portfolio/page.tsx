'use client'

import { useState } from "react";
import Link from "next/link";

interface Project{
    id:number,
    category:string,
    name:string,
    link:string,
    videoLink:string,
    decsription:string,
    stack:string[],
    githubLink:string
}


const Portfolio = () => {

    const [projects,setProjects] = useState<Project[]>([
        {
            id: 1,
            name: "Project One",
            category:"Front End",
            link: "https://www.youtube.com/watch?v=kSx9P6P588g",
            videoLink: "",
            decsription:"lorjsandsadkpasdk",
            stack:["html","css"],
            githubLink:""

          },
          {
            id: 2,
            name: "Project Two",
            category:"Front End",
            link: "https://example.com/project2",
            videoLink: "https://example.com/project2/video",
            decsription:"lorjsandsadkpasdk",
            stack:["html","css"],
            githubLink:""

          },
          {
            id: 3,
            name: "Project Three",
            category:"Front End",
            link: "https://example.com/project3",
            videoLink: "https://example.com/project3/video",
            decsription:"lorjsandsadkpasdk",
            stack:["html","css"],
            githubLink:""
          }
    ])


    const [currProj,setProj] = useState<Project>(projects[0]);

    const nextProject = () =>{
        const curr = projects.findIndex(project => project.id === currProj.id);
        const nextId = (curr + 1) % projects.length;
        setProj(projects[nextId]);
    }

    const prevProject = () =>{
        const curr = projects.findIndex(project => project.id === currProj.id);
        const nextId = curr - 1 < 0 ? projects.length-1 : curr-1;
        setProj(projects[nextId]);
    }


  return (
    <section className="flex w-full h-3/4  flex-col">
         <div className="w-full h-full flex ">
        <div className="w-[45%] flex flex-col h-full gap-12">
               <h1 className="text-8xl leading-none font-extrabold text-outlined text-white">{currProj.id < 10 ? "0" +currProj.id.toString() : currProj.id }</h1>
                <div className="text-start flex flex-col gap-7">
                    <h2 className="text-4xl leading-none font-bold text-outlined">Description</h2>
                    <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi inventore sequi ex amet quia minima perspiciatis ipsam consequuntur fugit.</p>
                </div>
                <div className="flex flex-row gap-4 text-xl">
                    {currProj.stack.map((tool)=>{
                        return <span className="capitalize text-accent">{tool}</span>
                    })}
                </div>
                <hr />
                <Link href={currProj.link}>
                    <span ><svg xmlns="http://www.w3.org/2000/svg" className="w-1/12 h-auto"  viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></span>
                </Link>
                
        </div>

        {/* Video */}
        <div className=" w-[55%] h-full p-4">
          <div className="w-full h-2/4 bg-green-500">



          </div>
          <div className="flex justify-end  my-5 gap-3 video-controll ">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => prevProject()} className="w-[50px] leftVideoArrow " viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg " onClick={() =>nextProject()} className="w-[50px]  rightVideoArrow" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </div>

        </div>

        



        </div>
        

      

    </section>
   
  )
}

export default Portfolio;