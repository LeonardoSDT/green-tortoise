'use client'

import * as React from 'react'

import { cn } from '@wallavi/ui/utils'
import { Button, type ButtonProps } from '@wallavi/ui/button'
import { CircleArrowDown } from 'lucide-react';

interface ButtonScrollToBottomProps extends ButtonProps {
  isVisible: boolean
  scrollToBottom: () => void
}

export function ButtonScrollToBottom({
  className,
  isVisible,
  scrollToBottom,
  ...props
}: ButtonScrollToBottomProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        '!fixed bottom-24 left-40 !rounded-full !bg-green-900 !border-0 !text-gray-200 !px-2.5 py-2 transition-opacity duration-300',
        isVisible ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={() => scrollToBottom()}
      {...props}
    >
      <CircleArrowDown />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}