import Image from 'next/image';

import { Container } from '@landing-page/shared';

const sharedClasses =
  'grid grid-cols-1 md:grid-cols-[260px_1fr] gap-y-7 place-items-center bg-white px-2 lg:min-w-[900px] w-full mx-auto rounded-[40px] gap-x-10 py-3 border border-[#676C75] border-solid';

export function Career() {
  const background = 'radial-gradient(circle, #F2F7FF 50%, #EDF2F7)';

  return (
    <Container
      className='px-4 py-16 lg:px-7'
      style={{ background }}
      variant='outer'
    >
      <h1 className='h1bold mb-8 mt-4'>
        Embark on Your Career Success Journey
      </h1>

      <ul className='has-scrollbar max-lg:space-y-7'>
        <li className={`${sharedClasses}`}>
          <div className='self-start'>
            <Image
              alt='femi'
              className='max-sm:w-full'
              height={300}
              src='/images/femi.png'
              width={250}
            />
          </div>

          <div className='px-4'>
            <h2 className='text-2xl font-bold text-dark-900'>
              John Doe
            </h2>
            <span className='text-sm font-semibold text-dark-900'>
              JUNIOR CLOUD ENGINEER AT MICROSOFT
            </span>

            <p className='mt-5'>
              From TSR Learning&apos;s Cloud Engineering Program to
              Microsoft, John has rapidly ascended in the tech world.
              Now a Junior Cloud Engineer at Microsoft, he leverages
              skills honed at TSR Learning to excel in cloud
              solutions, embodying the real-world impact of our
              education.
            </p>
          </div>
        </li>

        <li className={`${sharedClasses}`}>
          <div className=''>
            <Image
              alt='cyn'
              className='max-sm:object-cover'
              height={300}
              src='/images/cyn.png'
              width={250}
            />
          </div>

          <div className='px-4'>
            <h2 className='text-2xl font-bold text-dark-900'>
              John Doe
            </h2>
            <span className='text-sm font-semibold text-dark-900'>
              JUNIOR CLOUD ENGINEER AT MICROSOFT
            </span>

            <p className='mt-5'>
              From TSR Learning&apos;s Cloud Engineering Program to
              Microsoft, John has rapidly ascended in the tech world.
              Now a Junior Cloud Engineer at Microsoft, he leverages
              skills honed at TSR Learning to excel in cloud
              solutions, embodying the real-world impact of our
              education.
            </p>
          </div>
        </li>
        <li className={`${sharedClasses}`}>
          <div className='self-start'>
            <Image
              alt='adam'
              className='max-sm:w-full'
              height={300}
              src='/images/adam.png'
              width={250}
            />
          </div>

          <div className='px-4'>
            <h2 className='text-2xl font-bold text-dark-900'>
              John Doe
            </h2>
            <span className='text-sm font-semibold text-dark-900'>
              JUNIOR CLOUD ENGINEER AT MICROSOFT
            </span>

            <p className='mt-5'>
              From TSR Learning&apos;s Cloud Engineering Program to
              Microsoft, John has rapidly ascended in the tech world.
              Now a Junior Cloud Engineer at Microsoft, he leverages
              skills honed at TSR Learning to excel in cloud
              solutions, embodying the real-world impact of our
              education.
            </p>
          </div>
        </li>

        <li className={`${sharedClasses}`}>
          <div className='self-start'>
            <Image
              alt='apos'
              className='max-sm:w-full'
              height={300}
              src='/images/apos.png'
              width={250}
            />
          </div>

          <div className='px-4'>
            <h2 className='text-2xl font-bold text-dark-900'>
              John Doe
            </h2>
            <span className='text-sm font-semibold text-dark-900'>
              JUNIOR CLOUD ENGINEER AT MICROSOFT
            </span>

            <p className='mt-5'>
              From TSR Learning&apos;s Cloud Engineering Program to
              Microsoft, John has rapidly ascended in the tech world.
              Now a Junior Cloud Engineer at Microsoft, he leverages
              skills honed at TSR Learning to excel in cloud
              solutions, embodying the real-world impact of our
              education.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}
