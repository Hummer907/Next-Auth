'use client'
import { useRef } from 'react'

import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import emailjs from '@emailjs/browser'

const formSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters").max(15, "First name must be at most 15 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters").max(15, "Last name must be at most 15 characters"),
  email: z.string().email("Invalid email address").max(50, "Email must be at most 50 characters"),
  phonenumber: z.string().min(2, "Phone number must be at least 2 characters").max(20, "Phone number must be at most 20 characters"),
  message: z.string().max(100, "Message must be at most 100 characters"),
});

type FormData = z.infer<typeof formSchema>;


const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const formRef = useRef<HTMLFormElement | null>(null);

  console.log(process.env.EMAIL_SERVICE_ID,process.env.EMAIL_TEMPLATE_ID , process.env.EMAIL_ACCOUNT_PUBLIC_KEY);


  const onSubmit = (values: FormData) => {
    console.log(formRef);
    
    
    
    if (formRef.current) {
        const serviceId = process.env.EMAIL_SERVICE_ID || 'service_o4afv9e';
        const templateId = process.env.EMAIL_TEMPLATE_ID || 'template_9iis0v1';
        const publicKey = process.env.EMAIL_ACCOUNT_PUBLIC_KEY || 'ztUh9IMz2C0c8Y3u-';
        if(serviceId.length == 0 || templateId.length == 0 || publicKey.length == 0) {
            console.log('Check Env variables ');
            return;
        }
  
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      }
  };

  return (
    <>
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-10 flex-wrap'>
          <div className='fullname grid grid-cols-2 gap-6 w-full'>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className='bg-primary text-xl p-8 text-white border-0' placeholder='First name' />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className='bg-primary  text-xl p-8 text-white border-0' placeholder='Last name' />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=' grid grid-cols-2 gap-6 '>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className='bg-primary text-xl p-8 text-white border-0' placeholder='Email address' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className='bg-primary text-xl p-8 text-white border-0' placeholder='Phone number' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea {...field} placeholder="Type your message here." className='text-xl bg-primary border-0 h-[200px]' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-1/4 text-2xl border-0 p-4 rounded-xl bg-primary hover:bg-accent hover:text-black'>
            Send
          </Button>
        </form>
      </Form>
    </>
  );
}

export default ContactForm;
