import * as React from 'react';

import { Input, cn } from '@shared';

interface InputBoxProps {
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  renderInner?: () => React.ReactNode;
  type?: string;
  value?: string;
}

export function InputBox({
  className = '',
  inputClassName,
  placeholder = 'e.g Introduction',
  renderInner,
  type = 'text',
  value,
  ...otherProps
}: InputBoxProps) {
  return (
    <div
      className={cn(
        'relative mt-5 rounded-[12px] border-[1.5px] border-[#F2F2F2] bg-transparent',
        className,
      )}
    >
      <Input
        className={cn(
          'no-focus border-none bg-transparent pl-5 shadow-none outline-0 placeholder:text-[#7C7C7C]',
          inputClassName,
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
      />

      {renderInner && renderInner()}
    </div>
  );
}
