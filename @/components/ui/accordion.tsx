'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
import { Minus, Plus } from 'lucide-react';

import { cn } from '@shared/index';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-solid', className)}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Trigger
  > & {
    className?: string;
    hasIcon?: boolean;
  }
>(({ children, className, hasIcon, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 gap-4',
          className,
        )}
        {...props}
        onClick={() => setOpen(!open)}
      >
        {hasIcon && (
          <span
            className='grid place-items-center rounded-full p-2 text-blue-700'
            style={{ backgroundColor: '#F6F8FA' }}
          >
            {open ? (
              <Minus className='size-6 shrink-0' />
            ) : (
              <Plus className='size-6 shrink-0' />
            )}
          </span>
        )}
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
