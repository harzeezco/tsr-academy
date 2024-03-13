import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shared/components/forms';

//  className='!w-full mt-5'

export function SelectBox() {
  return (
    <Select>
      <SelectTrigger className='rounded-[12px] !border-[1.5px] !border-green-100 !bg-[#17474A] !py-3'>
        <div className='flex items-center gap-2'>
          <Image
            alt='message'
            className='left-4 top-3'
            height={24}
            src='/icons/speech.svg'
            width={24}
          />
          <SelectValue
            className='self-start'
            placeholder='How did  you hear about us? '
          />
        </div>
      </SelectTrigger>
      <SelectContent className='rounded-[12px] !border-green-100 !bg-[#17474A] text-white'>
        <SelectGroup>
          <SelectItem
            className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
            value='linkedin'
          >
            Linkedin
          </SelectItem>
          <SelectItem
            className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
            value='facebook'
          >
            Facebook
          </SelectItem>
          <SelectItem
            className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
            value='twitter'
          >
            Twitter
          </SelectItem>
          <SelectItem
            className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
            value='instagram'
          >
            Instagram
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
