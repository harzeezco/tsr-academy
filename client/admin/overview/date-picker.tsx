'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { addDays, format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@shared/index';

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 5, 20),
    to: addDays(new Date(2024, 5, 25), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
            id='date'
            variant='outline'
          >
            <CalendarDays className='mr-2 size-4 text-dark-200' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='w-auto !bg-[#fcfcfc] p-0'
        >
          <Calendar
            initialFocus
            defaultMonth={date?.from}
            mode='range'
            numberOfMonths={2}
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
