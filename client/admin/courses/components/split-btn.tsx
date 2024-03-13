import { Plus } from 'lucide-react';
import Image from 'next/image';

import { Button, cn } from '@shared';

import { OptionsProps } from '../data/data';
import { ModuleOption } from './module-option';
import { PopOver } from './pop-over';

type SplitBtnProps = {
  btnText: string;
  btnType?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
  options?: OptionsProps[];
  popBtnText?: string;
  triggerBtnText?: string;
};

export function SplitBtn({
  btnText,
  btnType = 'submit',
  className,
  options = [],
  triggerBtnText = 'New Module',
  ...otherBtnProps
}: SplitBtnProps) {
  return (
    <div className={cn('flex gap-6 py-5 pl-4', className)}>
      <PopOver
        renderTrigger={() => (
          <button
            className='flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-solid border-[#1152A2] px-6 py-3 text-[#1152A2] transition-all hover:bg-[#1152A2]/20'
            type='button'
          >
            {triggerBtnText}{' '}
            <Image
              alt='arrow pointing down'
              className='mr-2 rotate-180 transition-all focus-within:rotate-0'
              height={20}
              src='/icons/arrow-down-blue.svg'
              width={20}
            />
          </button>
        )}
      >
        {options.map((option) => (
          <ModuleOption key={option.label} {...option} />
        ))}
      </PopOver>

      <Button
        className='flex items-center justify-center gap-1 rounded-[10px]'
        type={btnType}
        {...otherBtnProps}
      >
        <Plus className='size-6 text-white' /> {btnText}
      </Button>
    </div>
  );
}
