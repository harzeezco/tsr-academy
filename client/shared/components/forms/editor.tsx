'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  onChange?: (value: string) => void;
  placeholder: string;
  value: string;
}

export function Editor({
  onChange,
  placeholder,
  value,
  ...otherProps
}: EditorProps) {
  const ReactQuill = React.useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );

  return (
    <div className='mb-20 bg-white'>
      <ReactQuill
        className='!placeholder:text-base !placeholder:text-[#78778B] !h-[126px] !rounded-[10px]'
        placeholder={placeholder}
        style={{ marginBottom: '5rem' }}
        theme='snow'
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
}
