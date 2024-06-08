'use client'
import { useState,useMemo } from "react"

import { css,html,js,react,tailwind,next,c_plus, java, typescript } from "../../../public/svg"
import { ScrollArea } from "@radix-ui/react-scroll-area";



const TeachSkills = () => {



    const webtools = useMemo(() => [css, html,  react, tailwind, next], []);
    const languages = useMemo(() => [ js,c_plus,java,typescript], []);
    

  return (

    <ScrollArea className="text-center  h-[200px] ">


        
    <h1 className="text-2xl">Programming languages</h1>
     <div className="flex flex-wrap p-6">

        {languages.map((language,index)=>{
            return <div className="  w-1/3  flex justify-center items-center p-5 ">
                {language}
            </div>
        })}



    </div>


    <h1 className="text-2xl">Web Tools</h1>
     <div className="flex flex-wrap p-6">

        {webtools.map((tool,index)=>{
            return <div className="  w-1/3  flex justify-center items-center p-5 ">
                {tool}
            </div>
        })}



    </div>
    
    </ScrollArea>
   
  )
}

export default TeachSkills