/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCountdownTime(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function countDownData(countDown: any): Array<{
  formatter: string;
  type: string;
}> {
  return [
    {
      type: 'Days',
      formatter: formatCountdownTime(countDown.days()) as string,
    },
    {
      type: 'Hours',
      formatter: formatCountdownTime(countDown.hours()) as string,
    },
    {
      type: 'Minutes',
      formatter: formatCountdownTime(countDown.minutes()) as string,
    },
    {
      type: 'Seconds',
      formatter: formatCountdownTime(countDown.seconds()) as string,
    },
  ];
}
