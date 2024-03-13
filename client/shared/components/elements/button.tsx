/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';

import { cn } from '@shared/lib/utils';

const Variants = {
  primary:
    'bg-gradient-to-r from-[#024ba5] to-[#105dbd] text-white active:scale-95  hover:!bg-transparent',
  orange:
    'bg-orange-700 text-white hover:shadow-orange active:scale-95 hover:bg-transparent',
  outline:
    'border size-10 grid place-items-center transition border-gray-300 bg-transparent border-solid hover:border-[#1152A2]',
  black: 'bg-black text-white active:scale-95 transition',
  success: 'bg-green-600 gray-50',
  border:
    'border-orange-700 border-[1.5px] border-solid text-orange transition hover:text-white',
  signup: 'bg-gray-450 text-gray-500 rounded-[10px]',
  google:
    'border-[1.5px] border-gray-250 hover:bg-gray-250 rounded-[10px] transition text-gray-500',
  lightgreen: 'bg-[#33BBC9] border-1 border-solid border-[#99DDE4]',
  blueBorder:
    'border-[1.5px] border-[#1152A2] text-[#1152A2] border-solid rounded-[10px] hover:bg-[#1152A2]/20 transition-all',
  slate:
    'rounded-[10px] px-5 py-[3px] font-medium text-[#9D9DA1] transition-all hover:bg-[#F0F0F1] hover:font-semibold',
  slateBg:
    'text-[#9D9DA1] hover:text-gray-500 hover:bg-[#9D9DA1]/60  bg-[#F0F0F1]',
  recurring:
    'rounded-[10px] border-2 border-solid border-[#FF9800] bg-[#FFEBCC] px-5 py-[3px] font-semibold text-[#FF9800]',
  green: 'bg-[#3DBC4A] text-white hover:bg-green-600 transition-all',
  lightOrange:
    'bg-[#FF9800] text-white hover:bg-[#FFAF38] transition-all',
  gradientSecondary:
    'bg-gradient-to-r from-[#00AABB] to-[#08808C] text-white',
  gradientPrimary:
    'bg-gradient-to-r from-[#024BA5 to-[#105DBD] text-white',
  getStarted:
    'bg-[#E7F9FB] rounded-[100px] text-blue-700 py-3 px-9 font-semibold text-lg',
  transparent:
    'border border-solid border-dark-900 text-dark-900 bg-transparent transition-all active:scale-95 hover:border-transparent',
};

const sizes = {
  sm: 'px-7 py-3 rounded-[100px]',
  md: 'px-7 py-3 font-medium w-fit',
  lg: 'px-16 py-2 font-medium rounded-[100px]',
  full: 'w-full py-3 font-medium',
  slate: 'rounded-[10px] px-10 py-2 font-medium transition-all',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  type?: string;
  variant?: keyof typeof Variants;
};

export function Button({
  children = null,
  className = '',
  size,
  type = 'button',
  variant = 'primary',
  ...otherProps
}: ButtonType) {
  return (
    <button
      className={cn(
        'disabled:opacity-70 transition-all duration-500 ease-out disabled:cursor-not-allowed focus:outline-none',
        Variants[variant],
        sizes[size as keyof typeof sizes],
        className,
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
