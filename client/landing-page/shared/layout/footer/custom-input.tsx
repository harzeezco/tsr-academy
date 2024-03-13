import Image from 'next/image';

import { Input, cn } from '@shared';

function CustomInput({
  className = '',
  icon = '/icons/user-white.svg',
  placeholder = 'Full Name*',
  type = 'text',
  value,
  ...otherProps
}: {
  className?: string;
  icon?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}) {
  return (
    <div
      className={cn(
        'relative mt-5 rounded-[12px] border-[1.5px] border-green-100 bg-[#17474A]',
        className,
      )}
    >
      <Image
        alt='search'
        className='absolute left-2 top-3 cursor-pointer'
        height={24}
        src={icon}
        width={24}
      />
      <Input
        className='no-focus border-none bg-[#17474A] pl-10 shadow-none outline-none placeholder:text-white'
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
      />
    </div>
  );
}

export default CustomInput;
