import * as React from 'react';

import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-12 border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full border-[1.5px] border-gray-250 rounded-[10px] placeholder:text-gray-500 py-4',
        className,
      )}
      type={type}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

export { Input };
