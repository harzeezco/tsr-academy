'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@landing-page/shared';

const FAQs = [
  {
    question:
      'What prior knowledge do I need to enrol in the cybersecurity program?',
    ans: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
  },
  {
    question:
      'What prior knowledge do I need to enrol in the cybersecurity program?',
    ans: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
  },
  {
    question:
      'What prior knowledge do I need to enrol in the cybersecurity program?',
    ans: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
  },
  {
    question:
      'What prior knowledge do I need to enrol in the cybersecurity program?',
    ans: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
  },
];

export function FAQ() {
  return (
    <Container
      className='px-4 py-14 lg:px-10'
      style={{
        background:
          'url(/images/faq-under-img.png), #E9F3FF'
      }}
      variant='outer'
    >
      <div className='mx-auto max-w-[1000px]'>
        <h1 className='h1bold mb-2 mt-4'>
          Frequently{' '}
          <span className='text-blue-700'>Asked Questions</span>
        </h1>
        <p className='max-w-xl text-dark-900 md:text-lg'>
          Can’t find the answer looking for? Please chat to our friendly
          team{' '}
          <Link className='text-blue-700 underline' href='/help'>
            help@tsrlearning.com
          </Link>
        </p>

        <div className='mt-12 flex items-center justify-between gap-5 max-lg:flex-col'>
          <div className='flex flex-[1.1] flex-col items-center gap-5'>
            {FAQs.map((faq) => (
              <div className='grid max-w-2xl gap-3 rounded-3xl bg-[#E7ECFB] p-4 md:grid-cols-[50px_1fr]'>
                <Image
                  alt='question mark'
                  height={50}
                  src='/icons/ques.svg'
                  width={50}
                />

                <div>
                  <h3 className='mb-2 font-semibold text-[#4E4E4E]'>
                    {faq.question}
                  </h3>
                  <p className='text-sm'>{faq.ans}</p>
                </div>
              </div>
          ))}
          </div>

          <div className='flex-[0.9]'>
            <Image
              alt='faq'
              height={800}
              src='/images/devops-faq.png'
              width={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
