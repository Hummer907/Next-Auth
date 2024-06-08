'use client'

import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
const Contact = () => {
  return (
    <div className='flex w-[100%] h-3/4  justify-between  flex-row gap-6 '>
        <div className='contact  w-[55%] h-full flex flex-col gap-10  p-10 rounded-xl bg-[#27272c]'>
            <h1 className='text-5xl text-accent'>Let's work together </h1>
            <p className='text-xl '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolorem fugit, modi error iure dolor.</p>
            <div className='flex flex-col gap-10 flex-wrap' >

                <div className='fullname flex gap-6 '>
                    <Input type='name'  className='bg-primary text-xl p-8 text-white border-0' placeholder='Fisrtname'/>
                    <Input type='name' className='bg-primary text-xl  p-8 text-white border-0' placeholder='Lastname'/>

                </div>

                <div className='fullname flex gap-6 '>
                    <Input type='email' className='bg-primary text-xl  p-8 text-white border-0' placeholder='Email address'/>
                    <Input type='phone' className='bg-primary text-xl  p-8 text-white border-0' placeholder='Phone number'/>

                </div>

                <div>
                <Textarea placeholder="Type your message here." className='  text-xl bg-primary border-0 h-[300px]' />
                </div>
                <Button type='submit' className='w-1/4 text-2xl border-0 p-4 rounded-xl hover:bg-accent hover:text-black'>
                    Send
                </Button>

            </div>



        </div>
      

      <div className='w-[45%] flex flex-col  justify-center items-center'>

            <div className=' h-2/4 2-full  grid grid-cols-1  text-[1.3rem] '>

                <div className='box flex-1 flex flex-row h-[105px] p-4 gap-4  justify-start items-center'>
                    <div className='icon w-[90px] h-auto p-6 bg-[#27272c] hover:bg-accent transition-all '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-full w-full' viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                    </div>

                    <div>
                        <h1>Phone</h1>
                        <p>+1 (850)-896-9009</p>
                    </div>

                </div>

                <div className='box flex flex-1 flex-row h-[105px] p-4 gap-4   justify-start items-center '>
                    <div className='icon w-[90px] h-auto p-6 bg-[#27272c] hover:bg-accent transition-all '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    </div>

                    <div>
                        <h1>Email</h1>
                        <p>nursultank907@gmail.com</p>
                    </div>

                </div>

                <div className='box flex flex-1 flex-row h-[105px] p-4 gap-4 justify-start items-center '>
                    <div className='icon w-[90px] h-auto p-6 bg-[#27272c] hover:bg-accent transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>

                    </div>

                    <div>
                        <h1>Phone</h1>
                        <p>Skokie,IL</p>
                    </div>

                </div>
               



            </div>
            

      </div>


    </div>
  )
}

export default Contact