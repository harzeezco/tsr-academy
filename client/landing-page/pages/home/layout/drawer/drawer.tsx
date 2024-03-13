'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import useLocation from '@shared/hooks/use-location';
import { Button, Logo, cn } from '@shared/index';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@landing-page/shared/components/sheet';

const socials = [
  {
    icon: <FaFacebookSquare />,
    href: 'https://www.facebook.com/tsrlearningllc',
    externalRoute: false,
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/company/tsrlearning/',
    externalRoute: false,
  },
  {
    icon: <RiInstagramFill />,
    href: 'https://www.instagram.com/tsrlearning/',
    externalRoute: true,
  },
];

const Courses = [
  {
    src: 'course.png',
    title: 'DevOps Essentials',
    href: '/devops',
  },
  {
    src: 'devops.png',
    title: 'Cloud Computing Fundamentals',
    href: '/cloud-computing',
  },
];

const WaitListCourses = [
  {
    src: 'course/security.png',
    title: 'Cyber Security',
    href: '/waitlist',
  },
  {
    src: 'course/analytics.png',
    title: 'Data Analytics',
    href: '/waitlist',
  },
];

export function Drawer() {
  const { country } = useLocation();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label='open menu'
          className='lg:hidden'
          type='button'
        >
          <AlignJustify className='size-8' />
        </button>
      </SheetTrigger>
      <SheetContent className='bg-white' side='left'>
        <div>
          <Logo src='/icons/tsr-logo.svg' />

          <div className='mt-16'>
            <nav>
              <div>
                <div className='border-b border-solid border-[#c6d3f0] pb-3'>
                  <Link
                    className={cn(
                      pathname === '/'
                        ? 'text-blue-700 font-semibold'
                        : 'font-medium text-dark-900',
                      'focus:text-blue-700 text-xl hover:text-blue-700 focus:text-normal-700',
                    )}
                    href='/'
                  >
                    Home
                  </Link>
                </div>

                <Accordion
                  collapsible
                  className='w-full'
                  type='single'
                >
                  <AccordionItem value='item-1'>
                    <AccordionTrigger
                      className={cn(
                        pathname === '/devops' ||
                          pathname === '/cloud-computing'
                          ? 'text-blue-700 font-semibold'
                          : 'font-medium text-dark-900',
                        'focus:text-blue-700 text-xl hover:text-blue-700 focus:text-normal-700',
                      )}
                    >
                      Courses
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-3'>
                      {Courses.map(({ href, src, title }) => (
                        <Link href={href}>
                          <div className='grid cursor-pointer grid-cols-[auto_1fr] items-center gap-3 rounded-[10px] bg-gray-100 p-2 hover:bg-gray-200'>
                            {' '}
                            <Image
                              alt='load'
                              className='h-[40px] w-[50px] rounded-[10px]'
                              height={200}
                              src={`/images/${src}`}
                              width={100}
                            />
                            <h4
                              className='line-clamp-2 font-medium leading-4 !text-dark-900'
                              title={title}
                            >
                              {title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-2'>
                    <AccordionTrigger
                      className={cn(
                        pathname === '/waitlist'
                          ? 'text-blue-700 font-semibold'
                          : 'font-medium text-dark-900',
                        'focus:text-blue-700 text-xl hover:text-blue-700 focus:text-normal-700',
                      )}
                    >
                      WaitList Courses
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-3'>
                      {WaitListCourses.map(({ href, src, title }) => (
                        <Link href={href}>
                          <div className='grid cursor-pointer grid-cols-[auto_1fr] items-center gap-3 rounded-[10px] bg-gray-100 p-1 hover:bg-gray-200'>
                            {' '}
                            <Image
                              alt='load'
                              className='h-[40px] w-[50px] rounded-[10px]'
                              height={200}
                              src={`/images/${src}`}
                              width={100}
                            />
                            <h4
                              className='line-clamp-2 font-medium leading-6 !text-dark-900'
                              title={title}
                            >
                              {title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='py-3 mb-7'>
                  <Link
                    className={cn(
                      pathname === '/blog'
                        ? 'text-blue-700 font-semibold'
                        : 'font-medium text-dark-900',
                      'focus:text-blue-700 text-xl hover:text-blue-700 focus:text-normal-700',
                    )}
                    href='/blog'
                  >
                    Blog
                  </Link>
                </div>

                <Link href='#enrol'>
                  <Button
                    className='rounded-[40px]'
                    size='full'
                    variant='orange'
                  >
                    Enrol Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <SheetFooter>
          <div className='relative z-50 mt-10 flex gap-3 pb-5'>
            {socials.map(({ externalRoute, href, icon }) => (
              <button
                className='grid size-12 place-items-center rounded-[16px] border-[1.5px] border-solid border-blue-700 text-blue-700 transition-all hover:bg-blue-700 hover:text-white'
                type='button'
                onClick={() =>
                  country === 'African' && externalRoute
                    ? window.open(
                        'https://www.instagram.com/tsrlearningafrica/',
                        '_blank',
                      )
                    : window.open(href, '_blank')
                }
              >
                <span className='text-[25px]'>{icon}</span>
              </button>
            ))}
          </div>
          <SheetClose asChild className='size-10' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
