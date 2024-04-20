'use client';

import * as React from 'react';
import Particles from '@tsparticles/react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import useLocation from '@shared/hooks/use-location';
import { Logo } from '@shared/index';

import { useParticles } from '@landing-page/shared/hooks/use-particles';

import { Container } from '../container';
import { FormBox } from './form';

type ContactProps = {
  content: string;
  icon: string;
  label: string;
};

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

const ContactDetails: ContactProps[] = [
  {
    label: 'Call Us',
    icon: 'location.svg',
    content: '+1(972)-457-1675',
  },
  {
    label: 'Email Us',
    icon: 'location.svg',
    content: 'start@tsrlearning.io',
  },
  {
    label: 'Chat Us on WhatsApp',
    icon: 'location.svg',
    content: '+1(972)-457-1675',
  },
  {
    label: 'Visit Our Physical Address',
    icon: 'location.svg',
    content: '6009 W Parker Rd, Ste 149Plano, TX, United States.',
  },
];

type FooterProps = {
  links: { href: string; label: string }[];
  title: string;
};

const FooterNav: FooterProps[] = [
  {
    title: 'Pages',
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'DevOps',
        href: '/devops',
      },
      {
        label: 'Cloud Computing',
        href: '/cloud-computing',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        label: 'Terms Conditions',
        href: '/terms-of-use',
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        label: 'Cookies',
        href: '/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'FAQ',
        href: '#faq',
      },
    ],
  },
];

const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      staggerChildren: 0.4,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export function Footer() {
  const { country } = useLocation();
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });
  const date = new Date().getFullYear();
  const { init, options } = useParticles();

  return (
    <Container
      as='footer'
      className='relative min-h-screen bg-green-900 py-10 text-white'
      variant='outer'
    >
      {init && (
        <Particles
          className='absolute left-0 top-0 size-full'
          id='footer-particles'
          options={options}
        />
      )}
      <Container className='relative z-40'>
        <div
          className='footer-grid mx-auto flex max-w-[1000px] flex-col-reverse items-center justify-between gap-10 rounded-[20px] lg:flex-row lg:p-7'
          style={{
            background: 'radial-gradient(#00585E 10%, #1A3739)',
          }}
        >
          <div ref={container} className='flex-1' id='enrol'>
            {isInView && (
              <motion.div
                animate='visible'
                className='relative z-40 flex flex-col gap-4 max-sm:px-3'
                exit='exit'
                initial='hidden'
                variants={containerVariants}
              >
                {ContactDetails.map(({ content, icon, label }) => (
                  <motion.div
                    key={label}
                    className='rounded-[20px] bg-[#0A3335] p-3'
                    variants={childVariants}
                  >
                    <span className='text-white'>{label}</span>
                    <div className='mt-1 grid grid-cols-[auto_1fr] gap-2'>
                      <Image
                        alt='contact'
                        height={24}
                        src={`/icons/${icon}`}
                        width={24}
                      />
                      <p className='text-green-100'>{content}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <div className='relative z-50 mt-10 flex gap-3 pb-5 max-sm:pl-3'>
              {socials.map(({ externalRoute, href, icon }) => (
                <button
                  className='grid size-12 place-items-center rounded-[16px] border-[1.5px] border-solid border-[#33BBC9] text-[#33BBC9] transition-all hover:bg-[#33BBC9] hover:text-white'
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
          </div>

          <div className='relative !z-50 flex-[1.5] rounded-[20px] bg-green-850 text-white lg:p-7'>
            <h1 className='mb-2 text-[24px] font-medium md:text-3xl'>
              Ready to Start Your Courses and Grow Your Career?
            </h1>
            <p>
              Experts teach you everything from the comfort of your
              own home. Improve your career today by enrolling in
              excellent courses at affordable prices.
            </p>

            <FormBox />
          </div>
        </div>

        <hr className='my-7 border-t border-solid border-[#DFE1E7]' />

        <div className='mt-10 flex flex-col items-center justify-around gap-x-20 gap-y-7 md:flex-row lg:ml-20'>
          <div className='flex-1'>
            <Logo src='/icons/tsr-logo-white.svg' />

            <p className='mt-4 text-gray-370'>
              TSRLearning is a global online learning platform that
              offers anyone, anywhere access to online courses
            </p>
          </div>

          <ul className='flex flex-[2] flex-wrap gap-x-20 gap-y-7'>
            {FooterNav.map(({ links, title }) => (
              <li key={title}>
                <h3 className='mb-3 font-semibold md:text-lg'>
                  {title}
                </h3>

                <ul>
                  {links.map(({ href, label }) => (
                    <li className='mb-2 text-gray-370 transition-all hover:font-medium hover:text-[#33BBC9]'>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <hr className='mb-7 mt-9 border-t border-solid border-[#7C7C7C]' />

      <div className='relative z-50 text-center'>
        <p className='text-gray-370'>
          ©{date} TSRLearning. All rights reserved
        </p>
      </div>

      <Image
        alt='pattern'
        className='absolute bottom-0 left-0 z-[1] w-full'
        height={640}
        src='/images/patern.png'
        width={1200}
      />
    </Container>
  );
}
