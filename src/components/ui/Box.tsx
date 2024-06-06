import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"



const Box = ({title ,time ,desc,iconLink }) => {
  return (
    <div className={"Box  "}>

        <Card className={`${iconLink ?" flex-row items-center " :"flex-row"}`+ "flex w-full h-full bg-boxColor border-0  text-white justify-center"}>
            {title && <CardHeader>
                {time && <CardDescription className="text-accent text-lg">{time}</CardDescription>}
                {title && <CardTitle className="text-3xl flex flex-row gap-4">
                    {title}
                   
                </CardTitle>}

                
                
            </CardHeader>}
            <CardContent className={"text-md mt-5 w-1/2 text-xl "}>
                
                {iconLink && 
                    iconLink}
                    {desc && <p>{desc}</p>}
                
            </CardContent>
            
        </Card>

        


    </div>
    
  )
}

export default Box