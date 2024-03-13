'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Logo, cn } from '@shared';

const LeftSidebarNav = [
  {
    label: 'overview',
    href: '/admin',
    icon: 'overview.svg',
    activeIcon: 'active-overview.svg',
  },
  {
    label: 'courses',
    href: '/admin/courses',
    icon: 'book.svg',
    activeIcon: 'active-book.svg',
  },
  {
    label: 'community',
    href: '/admin/community',
    icon: 'community.svg',
    activeIcon: 'active-community.svg',
  },
  {
    label: 'setting',
    href: '/admin/setting',
    icon: 'setting.svg',
    activeIcon: 'active-setting.svg',
  },
];

const courseDropdown = [
  {
    label: 'My Courses',
    href: '/admin/courses/my-courses',
  },
  {
    label: 'Create Course',
    href: '/admin/courses/create-course',
  },
];

const activeClasses = {
  active: 'text-[#141522] !bg-[#F5F5F7] font-medium',
  notActive: 'text-gray-270 bg-transparent',
  common:
    'hover:bg-[#F5F5F7] hover:text-[#141522] hover:font-medium rounded-[10px] transition-all flex items-center gap-3 capitalize w-full py-3',
};

function CustomLink({
  activeIcon = 'book.svg',
  className,
  href,
  icon,
  isActive,
  label,
}: {
  activeIcon?: string;
  className?: string;
  href: string;
  icon?: string;
  isActive: boolean;
  label: string;
}) {
  return (
    <Link
      className={cn(
        isActive ? activeClasses.active : activeClasses.notActive,
        activeClasses.common,
        'px-6',
        className,
      )}
      href={href}
    >
      {icon && (
        <Image
          alt={label}
          height={24}
          src={`/icons/${isActive ? activeIcon : icon}`}
          width={24}
        />
      )}
      {label}
    </Link>
  );
}

export function LeftSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-4'>
      <div className='grid place-items-center'>
        <Logo />
      </div>

      <ul className='mt-10 flex flex-col gap-5'>
        {LeftSidebarNav.map((details) => {
          const isActive = pathname === details.href;

          return (
            <li key={details.label}>
              {details.label === 'courses' ? (
                <button
                  className=' w-full max-w-[192px]'
                  type='button'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={cn(
                      isActive
                        ? activeClasses.active
                        : activeClasses.notActive,
                      activeClasses.common,
                    )}
                  >
                    <div className='flex w-full items-center gap-3 px-6 capitalize'>
                      <Image
                        alt={details.label}
                        height={24}
                        src={`/icons/${isActive ? details.activeIcon : details.icon}`}
                        width={24}
                      />
                      {details.label}
                    </div>

                    <Image
                      alt={details.label}
                      className={cn(
                        isOpen ? 'rotate-180' : 'rotate-0',
                        'mr-2 transition-all',
                      )}
                      height={20}
                      src='/icons/chevron.svg'
                      width={20}
                    />
                  </div>

                  {isOpen &&
                    courseDropdown.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <CustomLink
                          key={item.label}
                          {...item}
                          className='mt-2'
                          isActive={isActive}
                        />
                      );
                    })}
                </button>
              ) : (
                <CustomLink
                  key={details.label}
                  {...details}
                  isActive={isActive}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
