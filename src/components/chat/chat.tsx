'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@wallavi/ui/input'
import { ScrollArea } from '@wallavi/ui/scroll-area'
import { ClientMessage } from '@/app/actions';
import { useActions } from 'ai/rsc';
import { Button } from '@wallavi/ui/button';
import { cn } from "@wallavi/ui/utils";
import { Send, CircleArrowDown } from 'lucide-react';
import { ButtonScrollToBottom } from './button-scroll-to-bottom';
import { useScrollAnchor } from '@/hooks/use-scroll-anchor';

interface ChatProps {
  messages: ClientMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ClientMessage[]>>;
}

export function Chat({ messages, setMessages }: ChatProps) {
  const [input, setInput] = useState('');
  const { submitMessage } = useActions();

  const handleSubmission = async () => {
    setMessages(currentMessages => [
      ...currentMessages,
      {
        id: new Date().toISOString(),
        status: 'user.message.created',
        text: input,
        gui: null,
      },
    ]);

    const response = await submitMessage(input);
    setMessages(currentMessages => [...currentMessages, response]);
    setInput('');
  };

  const { messagesRef, scrollRef, visibilityRef, isVisible, scrollToBottom } = useScrollAnchor()

  return (
    <div className="flex flex-col-reverse">
      <div className="flex flex-row gap-2 w-full">
        <Input
          className='border-none !ring-green-800'
          value={input}
          onChange={event => setInput(event.target.value)}
          placeholder="Ask a question"
          onKeyDown={event => {
            if (event.key === 'Enter' && input && input.trim() !== '') {
              handleSubmission();
            }
          }}
        />
        <Button
          className='!bg-green-800 !p-2 !w-11'
          disabled={!input || input.trim() === ''}
          onClick={handleSubmission}
        >
          <Send className='h-5 w-5' />
        </Button>
      </div>

      <ScrollArea className='h-96 mb-4' ref={scrollRef}>
        <div className='space-y-4 pr-4' ref={messagesRef}>
          {messages.map(message => {
            const isUser = message.status === 'user.message.created';

            return (
              <div
                key={message.id}
                className={
                  cn("flex flex-col gap-2 py-2 px-3 rounded-lg whitespace-pre-wrap break-words w-max max-w-64",
                    isUser ? 'ml-auto bg-gray-900/40 text-white' : 'bg-green-800 text-gray-200'
                  )}
              >
                <div className="text-xs font-bold">
                  {message.status === 'user.message.created' ? 'You' : 'Wallavi AI'}
                </div>
                <div>
                  {message.text}
                </div>
              </div>
            )
          })}
          <div className="w-full h-px" ref={visibilityRef} />
        </div>
        <ButtonScrollToBottom scrollToBottom={scrollToBottom} isVisible={isVisible} />
      </ScrollArea>
    </div>
  );
}