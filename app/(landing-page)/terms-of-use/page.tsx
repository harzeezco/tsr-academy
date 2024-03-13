'use client';

import Particles from '@tsparticles/react';
import Link from 'next/link';

import { Button, Logo } from '@shared/index';

import { Container } from '@landing-page/shared';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

export default function TermsOfUse() {
  const { init, options } = useParticles();

  return (
    <main>
      <Container
        as='section'
        className='cohort-grid relative'
        style={{
          background:
            'url(/images/under-image.png), linear-gradient(to right, #024ba5, #105dbd)',
        }}
        variant='outer'
      >
        {init && (
          <Particles
            className='absolute left-0 top-0 z-20 size-full'
            id='terms-particles'
            options={options}
          />
        )}
        <Container className='py-10 text-center text-white'>
          <div className='mb-10 flex items-center justify-between'>
            <Logo isWhite />

            <Button size='sm' variant='orange'>
              Enrol Now
            </Button>
          </div>

          <h1 className='mx-auto text-4xl md:max-w-[900px] lg:text-[80px] lg:leading-[85px]'>
            <span className='text-orange-700'>Terms of Use </span> for
            TSR Learning
          </h1>
        </Container>
      </Container>

      <Container
        as='section'
        className='space-y-7 px-4 py-16 lg:px-[7rem]'
        style={{
          background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
        }}
        variant='outer'
      >
        <div>
          <h2 className='mb-2 text-2xl font-bold text-dark-900'>
            {' '}
            Introduction
          </h2>
          <p>
            Welcome to TSR Learning! These Terms of Use govern your
            access to and use of our website, online courses, and
            related services. By accessing or using our services, you
            agree to be bound by these terms.
          </p>
        </div>

        <div className='space-y-7 pl-6'>
          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Use of the Platform </li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                Our platform provides online learning materials and
                resources. You agree to use these resources only for
                lawful, non-commercial purposes.
              </li>
              <li>
                You must not misuse or attempt to interfere with the
                platform’s functionality.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Registration and Accounts</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                To access certain features, you may need to register
                and create an account. You are responsible for
                maintaining the confidentiality of your account
                information.
              </li>
              <li>
                You agree to provide accurate and complete information
                during registration.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>
                Intellectual Property Rights
              </li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                All content on the platform, including text, graphics,
                and interactive features, is owned by TSR Learning or
                its licensors and is protected by intellectual
                property laws.
              </li>
              <li>
                You may use the content for personal, non-commercial
                purposes only, and no rights, title, or interest in
                any content is transferred to you.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>User Conduct</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                You agree not to post or transmit any unlawful,
                threatening, abusive, defamatory, or obscene material.
              </li>
              <li>
                You shall not engage in any conduct that disrupts the
                platform or the learning experience of other users.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Privacy Policy</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                Your use of the platform is also governed by our{' '}
                <Link
                  className='text-blue-700 underline transition-all hover:text-blue-900'
                  href='/privacy-policy'
                >
                  Privacy Policy
                </Link>
                , which outlines our data collection and usage
                practices.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Disclaimers</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                The platform and its content are provided &quot;as
                is&quot; without any warranties. We do not guarantee
                the accuracy, completeness, or reliability of any
                content.
              </li>
              <li>
                We are not liable for any interruptions or errors in
                the operation of the platform.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Limitation of Liability</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                TSR Learning shall not be liable for any indirect,
                incidental, special, or consequential damages arising
                out of or in connection with your use of the platform.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Changes to Terms</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                We reserve the right to modify these Terms of Use at
                any time. Your continued use of the platform after any
                such changes constitutes your acceptance of the new
                Terms.
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Governing Law</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                These Terms of Use are governed by [Jurisdiction] law,
                and any disputes related to these terms will be
                subject to the exclusive jurisdiction of the courts of
                [Jurisdiction].
              </li>
            </ul>
          </div>

          <div className='lg:pl-7'>
            <ul className='mb-3 text-2xl font-bold text-blue-700'>
              <li className='list-disc'>Contact Us</li>
            </ul>

            <ul
              className='list-disc pl-5 lg:pl-12'
              style={{ lineHeight: '1.8' }}
            >
              <li>
                If you have any questions about these Terms of Use,
                please contact us at [Contact Information].
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
