"use client";

import React from 'react';
import { useMediaQuery } from "@wallavi/ui/use-media-query"
import { Button } from '@wallavi/ui/button'
import { Icons } from '@wallavi/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@wallavi/ui/popover"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@wallavi/ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "@wallavi/ui/avatar"
import { X } from 'lucide-react'
import { Chat } from './chat';
import { ClientMessage } from '@/app/actions';

interface ChatButtonProps {
  path?: string;
}

export function ChatButton({ path }: ChatButtonProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [messages, setMessages] = React.useState<ClientMessage[]>([]);


  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className='!fixed bottom-0 left-0 m-9 !p-3 !h-14 !rounded-full !z-50 !text-gray-200 !bg-green-800 !shadow-2xl' variant='secondary'><Icons.wallavi className='w-8 h-8' /></Button>
        </PopoverTrigger>
        <PopoverContent side='right' sideOffset={10} className='mb-4 !border-0 !p-0 !w-96'>
          <div className='p-4 bg-green-800 rounded-t-md flex justify-between'>
            <div className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="/wallavi.jpg" />
                <AvatarFallback>WA</AvatarFallback>
              </Avatar>
              <span className='text-gray-200 font-semibold'>Wallavi AI</span>
            </div>
            <div className='hover:bg-green-900 hover:cursor-pointer rounded-md p-2 text-gray-200' onClick={() => setOpen(false)}>
              <X />
            </div>
          </div>
          <div className='p-4'>
            <Chat messages={messages} setMessages={setMessages} />
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='!fixed bottom-0 left-0 m-9 !p-3 !h-14 !rounded-full !z-50 !text-gray-200 !bg-green-800 !shadow-2xl' variant='secondary'><Icons.wallavi className='w-8 h-8' /></Button>
      </DrawerTrigger>
      <DrawerContent className='!border-0'>
        <div className='p-4 bg-green-800 flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar>
              <AvatarImage src="/wallavi.jpg" />
              <AvatarFallback>WA</AvatarFallback>
            </Avatar>
            <span className='text-gray-200 font-semibold'>Wallavi AI</span>
          </div>
          <div className='hover:bg-green-900 hover:cursor-pointer rounded-md p-2 text-gray-200' onClick={() => setOpen(false)}>
            <X />
          </div>
        </div>
        <div className='p-4'>
          <Chat messages={messages} setMessages={setMessages} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}