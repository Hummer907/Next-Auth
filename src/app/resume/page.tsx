'use client';
import Box from "@/components/ui/Box";
import { Content } from "next/font/google"
import { ScrollArea ,ScrollBar} from "@/components/ui/scroll-area"

import { useState } from "react";
import { css,js,html,react,next,tailwind } from "../../../public/svg"
import AboutMe from "@/components/ui/AboutMe";

interface Box {
    title: string;
    date: string;
    name: string;
  }
  
  interface Data {
    title: string;
    content: string;
    boxes: Box[] | [];
  }

const data = [
    {
        title:'Experince',
        content:'Lorem ipsum dasjdnoasn vijdsfnoan nasiudnason',
        boxes:[
            {
                title:'Web Deveoper ',
                date:"Summer 2023 - Winter 2023",
                name :"Seytech.co"
            },
            {
                title:'Web Deveoper ',
                date:"Summer 2023 - Winter 2023",
                name :"Seytech.co"
            },
            {
                title:'Web Deveoper ',
                date:"Summer 2023 - Winter 2023",
                name :"Seytech.co"
            },
            {
                title:'Web Deveoper ',
                date:"Summer 2023 - Winter 2023",
                name :"Seytech.co"
            }
            
        ]
    },
   {
        title:'Education',
        content:"Lorem ipsum dasjdnoasn vijdsfnoan nasiudnason",
        boxes:[
            {
                name : "Seytech Bootcamp",
                title :"Front End Devepoment",
                date:"Summer 2023 - Winter 2023"
            },
            { 
                name : "Kyrgyz State University",
                title :"Computer Science",
                date:"Summer 2023 - Winter 2023"
            }
        ]
    },
    
    {
        title:'About Me',
        content:"Lorem ipsum dasjdnoasn vijdsfnoan nasiudnason",
        boxes:[
        
        ]
    }
]
  


const Resume = () => {


    const [title,setTitle] = useState("Experince");

    const [content,setContent] = useState(data[0])
    

    const  changeContent = (el:Data,index:number) =>{
        if(index == data.length-1) {
            setContent({ title: 'About Me', content: '', boxes: [] });
            return;
        }

        setContent(data[index]);
    }
        
    

  return (
    <div className=" flex w-[100%] h-3/4  gap-10 justify-between">

        {/* First Section */}
      <div className=" w-5/12  content ">

        <div className="flex flex-col gap-4 m-10 p-3 ">
            <h1  className="text-6xl  font-bold ">Why hire me ?</h1>
           
        </div>

        <div className="buttons flex flex-col gap-5">  

            {data.map((el,index)=>{
                return (
                <div 
                className="text-2xl py-8 text-white font-semibold text-center bg-boxColor rounded-2xl hover:bg-accent hover:text-black transition-all"
                onClick={() => changeContent(el,index)}
                key={index}
                >
                    {el.title}
                </div>)
            })}

        </div>
        
      </div>


                {/* Second Section */}
      <div className=" w-7/12  topic Content">
            <div className="flex flex-col m-10 ">
                <h1  className="text-6xl  font-bold ">{content.title}</h1>
               
            </div>


           
               {
                content.boxes == null ?
                    <AboutMe/>
                :   
                <div className=" m-auto grid grid-flow-row grid-cols-2 gap-3  ">
                    {content?.boxes?.map((box ,index)=>{
                        return <Box key={index} title={box.title} desc={box.name} time={box.date} iconLink={box.iconLink}/>
                   })}

                </div>
                    
                
               
              
               
               
               }
          

            
      </div>
    </div>
  )
}

export default Resume