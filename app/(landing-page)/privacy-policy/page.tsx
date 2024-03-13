'use client';

import Particles from '@tsparticles/react';

import { Button, Logo } from '@shared/index';

import { Container } from '@landing-page/shared';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

export default function PrivacyPolicy() {
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
          <div className='relative z-50 mb-10 flex items-center justify-between'>
            <Logo isWhite />

            <Button size='sm' variant='orange'>
              Enrol Now
            </Button>
          </div>

          <h1 className='mx-auto text-4xl md:max-w-[900px] lg:text-[80px] lg:leading-[85px]'>
            <span className='text-orange-700'>Privacy Policy </span>{' '}
            for TSR Learning
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
            Welcome to TSR Learning. Your privacy is important to us.
            This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit
            our website and use our services.
          </p>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            1. Information Collection
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              <strong>Personal Information</strong>: We may collect
              personal information such as your name, email address,
              and contact details when you register for a course,
              subscribe to our newsletter, or interact with our
              services.
            </li>
            <li>
              <strong>Usage Data</strong>: Information on how the
              service is accessed and used (e.g., page views,
              navigation paths) may be collected automatically.
            </li>
            <li>
              <strong>Cookies</strong>: Our website uses cookies to
              enhance user experience. You can refuse cookies but this
              may limit functionality.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            2. Use of Information
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              The information we collect is used to provide, maintain,
              and improve our services, communicate with you, and
              enhance your learning experience.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            3. Sharing Information
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              We do not sell, trade, or rent your personal
              identification information to others.
            </li>
            <li>
              We may share generic aggregated demographic information
              not linked to any personal identification information
              regarding visitors and users.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            4. Data Security
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              We are committed to ensuring that your information is
              secure. We use appropriate measures to protect against
              unauthorized access, alteration, disclosure, or
              destruction of your personal information.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            5. Your Rights
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              You have the right to access, correct, or delete your
              personal data.
            </li>
            <li>
              You may opt out of receiving marketing materials or
              newsletters from us.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            6. Third-Party Websites
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              Our service may contain links to external sites that are
              not operated by us. If you click on a third-party link,
              you will be directed to that third party&apos;s site. We
              strongly advise you to review the Privacy Policy of
              every site you visit.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            7. Third-Party Websites
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              Our service may contain links to external sites that are
              not operated by us. If you click on a third-party link,
              you will be directed to that third party&apos;s site. We
              strongly advise you to review the Privacy Policy of
              every site you visit.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            8. Changes to This Privacy Policy
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              We may update our Privacy Policy from time to time. We
              will notify you of any changes by posting the new
              Privacy Policy on this page.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-3 text-2xl font-bold text-blue-700'>
            9. Contact
          </h3>

          <ul
            className='list-disc pl-12'
            style={{ lineHeight: '1.8' }}
          >
            <li>
              If you have any questions about this Privacy Policy,
              please contact us at [Contact Information].
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
