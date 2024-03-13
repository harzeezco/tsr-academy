'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Logo, cn } from '@shared';

import { Container } from '@landing-page/shared';

import { HeaderNav, HeaderNavProp } from '../../data';
import { Drawer } from '../drawer/drawer';
import { Dropdown } from '../dropdown';

const menu = {
  open: {
    scale: 1,
    transition: {
      duration: 0.65,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function NavLink({
  navColor,
  navLink,
}: {
  navColor?: boolean;
  navLink: HeaderNavProp[];
}) {
  const [isShow, setIsShow] = React.useState(false);
  const pathname = usePathname();
  const getNavLink = navLink || [];

  return (
    <nav>
      <ul className='hidden items-center gap-10 lg:flex'>
        {getNavLink.map(({ label, route }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;

          return (
            <li
              key={label}
              className={cn(
                isActive ? 'text-blue-700' : 'text-dark-900',
                'font-medium focus:text-blue-700 hover:text-blue-700 focus:text-normal-700',
              )}
              style={{ color: navColor ? 'white' : '' }}
            >
              {label === 'Courses' ? (
                <div
                  onFocus={() => setIsShow(true)}
                  onMouseEnter={() => setIsShow(true)}
                  onMouseLeave={() => setIsShow(false)}
                  onMouseOver={() => setIsShow(true)}
                >
                  <button
                    className='group flex items-center gap-1'
                    type='button'
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        isShow ? 'rotate-180' : '',
                        'group-hover:rotate-180 h-4 transition',
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    <motion.div
                      animate={isShow ? 'open' : 'closed'}
                      className='fixed left-14 top-[70px] z-[9999] w-[850px] !bg-white'
                      initial='closed'
                      style={{ originX: 0.6 }}
                      variants={menu}
                    >
                      {isShow && <Dropdown isShow={isShow} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={route}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Header({
  btnType = 'orange',
  navColor = false,
}: {
  btnType?: string;
  navColor?: boolean;
}) {
  return (
    <Container
      as='header'
      className='relative z-10 flex items-center justify-between px-4 py-6 xl:pl-14 2xl:pl-0'
    >
      <div className='flex items-center gap-20'>
        <Logo src='/icons/tsr-logo.svg' />
        <NavLink navColor={navColor} navLink={HeaderNav} />
      </div>

      <div className='flex items-center gap-1'>
        <Link href='#enrol'>
          <Button
            className='max-md:hidden'
            size='sm'
            variant={btnType === 'orange' ? 'orange' : 'primary'}
          >
            Enrol Now
          </Button>
        </Link>

        <Drawer />
      </div>
    </Container>
  );
}
