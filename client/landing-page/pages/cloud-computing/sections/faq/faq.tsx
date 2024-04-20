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
  const background =
    'url(/images/faq-under-img.png), radial-gradient(circle, #F2FEFF 0%, #EDF7F7 100%)';

  return (
    <Container
      className='px-4 py-14 lg:px-10'
      style={{ background }}
      variant='outer'
    >
      <div className='mx-auto max-w-[1000px]'>
        <h1 className='h1bold mb-2 mt-4 text-dark-900'>
          Frequently{' '}
          <span className='text-[#00828F]'>Asked Questions</span>
        </h1>
        <p className='max-w-xl text-dark-900 md:text-lg'>
          Can’t find the answer looking for? Please chat to our friendly
          team{' '}
          <Link className='text-[#00828F] underline' href='/help'>
            help@tsrlearning.com
          </Link>
        </p>

        <div className='mt-12 flex items-center justify-between gap-5 max-lg:flex-col'>
          <ul className='flex flex-[1.2] flex-col gap-5'>
            {FAQs.map((faq) => (
              <li className='grid max-w-2xl gap-3 rounded-3xl bg-[#E7F9FB] p-4 md:grid-cols-[50px_1fr]'>
                <Image
                  alt='faq'
                  height={50}
                  src='/icons/faq.svg'
                  width={50}
                />

                <div>
                  <h3 className='mb-2 font-semibold text-[#4E4E4E]'>
                    {faq.question}
                  </h3>
                  <p className='text-sm'>{faq.ans}</p>
                </div>
              </li>
          ))}
          </ul>

          <div className='flex-[0.8]'>
            <Image
              alt='faq'
              height={800}
              src='/images/cloud-faq.png'
              width={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
