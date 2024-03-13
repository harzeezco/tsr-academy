import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@shared';

import { Container } from '@landing-page/shared';

export function RoadMap() {
  const background = 'radial-gradient(circle, #F2FEFF 50%, #EDF7F7)';

  return (
    <Container
      as='section'
      className='py-14'
      style={{ background }}
      variant='outer'
    >
      <h1 className='h1bold mx-auto max-w-3xl text-center'>
        Embark on Your Cloud Engineering{' '}
        <span className='text-[#1152A2]'>Success Story</span>
      </h1>

      <p className='mx-auto mt-3 max-w-[700px] text-center max-md:px-2 md:text-lg'>
        From enrolment to certification - master the art of Cloud
        Engineering with our expert-led program. Your journey to
        becoming an industry-ready professional starts here.
      </p>

      <div className='mt-7 flex justify-center'>
        <Link href='#enrol'>
          <Button
            className='px-14 py-3 text-lg font-semibold'
            size='sm'
            variant='primary'
          >
            Enrol Now
          </Button>
        </Link>
      </div>

      <div className='relative mt-20'>
        <Image
          alt=''
          className='absolute left-0 top-0 max-sm:h-[50px] max-sm:w-[80px] sm:size-[80px]'
          height={123}
          src='/images/left-hang2.png'
          width={243}
        />

        <Image
          alt=''
          className='absolute left-0 top-24  max-sm:h-[50px] max-sm:w-[80px] sm:h-[80px] sm:w-[90px] lg:top-52 lg:w-[150px]'
          height={123}
          src='/images/left-hang1.png'
          width={100}
        />

        <div className='relative mx-auto grid max-w-[824px] place-items-center border-t border-black/10'>
          <Image
            alt=''
            className='w-full max-sm:w-[200px] sm:w-[500px]'
            height={370}
            src='/images/hanger2.png'
            width={600}
          />

          <h1 className='absolute bottom-1 text-xl font-medium text-white sm:bottom-6 sm:text-4xl lg:bottom-6 lg:text-5xl'>
            Your Journey
          </h1>
        </div>

        <Image
          alt=''
          className='absolute right-0 top-0 max-sm:h-[50px] max-sm:w-[80px] sm:h-[70px] sm:w-[90px] lg:top-52 lg:w-[150px]'
          height={123}
          src='/images/right-hang2.png'
          width={243}
        />

        <Image
          alt=''
          className='absolute right-0 top-28 max-sm:h-[50px] max-sm:w-[60px] sm:h-[70px] sm:w-[90px] lg:top-10'
          height={123}
          src='/images/right-hang1.png'
          width={100}
        />
      </div>

      <div className='mx-auto mt-14 max-w-2xl grid-cols-[auto_1fr] items-center justify-center gap-7 px-2 max-sm:grid md:mt-20 md:flex'>
        <div className='flex items-center gap-7 max-sm:gap-4'>
          <Image
            alt=''
            className='object-cover max-sm:h-[50px] max-sm:w-[60px] sm:size-[80px] lg:size-[90px]'
            height={94}
            src='/images/division1.png'
            width={90}
          />

          <Image
            alt=''
            className='max-sm:h-[70px] max-sm:w-[60px] sm:size-[100px] lg:ml-5 lg:size-[90px]'
            height={135}
            src='/images/light2.png'
            width={110}
          />
        </div>

        <div className='relative'>
          <h1 className='text-xl font-medium text-dark-900 sm:text-3xl lg:text-4xl'>
            Enrolment
          </h1>
          <p className='md:mt-2'>
            Fill out the enrollment form and choose your start date.
          </p>

          <Image
            alt=''
            className='absolute left-14 top-2 max-sm:hidden md:left-12 md:top-3 md:object-cover lg:left-10 lg:!max-w-[450px]'
            height={192}
            src='/images/union1.png'
            width={650}
          />
        </div>
      </div>

      <div className='!ml-20 mt-5 grid-cols-[1fr_auto] items-center justify-center max-sm:grid sm:mt-24 md:flex md:gap-7'>
        <div className='relative'>
          <h1 className='text-nowrap text-xl font-medium text-dark-900 sm:text-3xl lg:text-4xl'>
            Engaging CourseWork
          </h1>

          <ul className='mt-4 max-w-[400px]'>
            <li className='max-w-xs list-disc max-sm:max-w-[200px] max-sm:text-sm md:mt-2'>
              Access comprehensive modules covering key cloud
              engineering concepts.
            </li>
            <li className='max-w-xs list-disc max-sm:max-w-[200px] max-sm:text-sm md:mt-2'>
              Participate in live webinars and interactive discussions
              with industry experts.
            </li>
          </ul>

          <Image
            alt=''
            className='absolute -left-16 top-3 w-[250px] !max-w-[250px] object-cover'
            height={192}
            src='/images/union2.png'
            width={350}
          />
        </div>

        <div className='mr-3 items-center gap-7 max-sm:space-y-4 max-sm:pt-6 md:flex'>
          <Image
            alt=''
            className='object-cover md:ml-5'
            height={135}
            src='/images/desktop2.png'
            width={110}
          />

          <Image
            alt=''
            className='object-cover'
            height={94}
            src='/images/subtract2.png'
            width={90}
          />
        </div>
      </div>

      <div className='mt-24 flex grid-cols-[auto_1fr] items-center justify-center gap-7 px-2 max-sm:grid md:flex md:gap-7 lg:mr-20'>
        <div className='items-center gap-7 max-sm:space-y-4 max-sm:pt-6 md:flex'>
          <Image
            alt=''
            className='object-cover max-sm:h-[50px] max-sm:w-[60px] sm:size-[80px] lg:size-[90px]'
            height={94}
            src='/images/division3.png'
            width={90}
          />

          <Image
            alt=''
            className='object-cover max-sm:h-[70px] max-sm:w-[60px] sm:h-[130px] sm:w-[100px] md:mx-5 lg:w-[90px]'
            height={135}
            src='/images/tablet2.png'
            width={110}
          />
        </div>

        <div className='relative'>
          <h1 className='text-xl font-medium text-dark-900 sm:text-3xl lg:text-4xl'>
            Hands-On <br className='sm:hidden' /> Projects
          </h1>
          <ul className='mt-2 max-w-[400px] sm:mt-4'>
            <li className='max-w-md list-disc max-sm:max-w-[300px] max-sm:text-sm md:mt-2'>
              Engage in real-world scenarios and hands-on projects
              that challenge and refine your skills.
            </li>
            <li className='max-w-md list-disc max-sm:max-w-[200px] max-sm:text-sm md:mt-2'>
              feedback from your mentors to hone your expertise.
            </li>
          </ul>

          <Image
            alt=''
            className='absolute -left-1 top-3 max-sm:h-[200px] sm:hidden md:left-28 md:!max-w-[450px] lg:inline-block'
            height={192}
            src='/images/union3.png'
            width={650}
          />
        </div>
      </div>

      <div className='mt-20 flex grid-cols-[1fr_auto] items-center justify-center gap-2 px-2 max-sm:grid md:!ml-20 md:mt-24 md:flex md:gap-7'>
        <div className='relative max-sm:ml-10'>
          <h1 className='text-xl font-medium text-dark-900 max-sm:ml-7 sm:text-3xl lg:text-4xl'>
            Continuous <br className='md:hidden' /> Assessment
          </h1>

          <ul className='max-w-[400px] md:mt-4'>
            <li className='max-w-sm list-disc max-sm:max-w-[300px] max-sm:text-sm md:mt-2'>
              Complete regular assessments to gauge your understanding
              and progress.
            </li>
            <li className='max-w-sm list-disc max-sm:max-w-[300px] max-sm:text-sm md:mt-2'>
              Utilise the continuous support from instructors and peer
              discussions for any challenges faced.
            </li>
          </ul>

          <Image
            alt=''
            className='absolute -left-10 top-3 w-[250px] !max-w-[250px] object-cover md:-left-16'
            height={192}
            src='/images/union4.png'
            width={350}
          />
        </div>

        <div className='items-center gap-7 max-sm:space-y-4 max-sm:pt-6 md:flex'>
          <Image
            alt=''
            className='max-sm:h-[70px] max-sm:w-[60px] md:ml-5'
            height={135}
            src='/images/notebook2.png'
            width={110}
          />

          <Image
            alt=''
            className='object-cover max-sm:h-[70px] max-sm:w-[60px]'
            height={94}
            src='/images/subtract4.png'
            width={90}
          />
        </div>
      </div>

      <div className='mt-16 flex grid-cols-[auto_1fr] items-center justify-center gap-7 px-2 max-sm:grid md:mt-24 md:flex lg:mr-20'>
        <div className='items-center gap-7 max-sm:space-y-4 max-sm:pt-6 md:flex'>
          <Image
            alt=''
            className='object-cover'
            height={94}
            src='/images/division5.png'
            width={90}
          />

          <Image
            alt=''
            className='object-cover md:mx-5'
            height={135}
            src='/images/note2.png'
            width={110}
          />
        </div>

        <div className='relative'>
          <h1 className='text-xl font-medium text-dark-900 max-sm:ml-7 sm:text-3xl lg:text-4xl'>
            Final Evaluation
          </h1>
          <ul className='max-w-[400px] md:mt-4'>
            <li className='max-w-sm list-disc max-sm:max-w-[300px] max-sm:text-sm md:mt-2'>
              Undertake a comprehensive final project that
              encapsulates your learning and skills
            </li>
            <li className='max-w-sm list-disc max-sm:max-w-[300px] max-sm:text-sm md:mt-2'>
              Your project is evaluated by a panel of experts,
              ensuring you meet the high standards of the program.
            </li>
          </ul>

          <Image
            alt=''
            className='absolute left-9 top-3  hidden w-[450px] !max-w-[450px] object-cover lg:inline-block'
            height={192}
            src='/images/union5.png'
            width={650}
          />
        </div>
      </div>
      <div className='mt-16 flex items-center justify-center gap-7 max-sm:px-6 md:!ml-20 lg:mt-24'>
        <div className='relative'>
          <h1 className='text-xl font-medium text-dark-900 max-sm:ml-7 sm:text-3xl lg:text-4xl'>
            Earn Certification
          </h1>

          <ul className='mt-1 max-w-[400px]'>
            <li className='list-disc'>
              Upon successful completion and evaluation, receive your
              TSR Learning Cloud Engineering Certification
            </li>
            <li className='list-disc'>
              Join our network of successful alumni and step into the
              world of cybersecurity with confidence and recognition.
            </li>
          </ul>

          <Image
            alt=''
            className='absolute -left-12 top-3 hidden w-[250px] !max-w-[250px] object-cover lg:inline-block'
            height={192}
            src='/images/union6.png'
            width={350}
          />
        </div>

        <div className='items-center gap-7 max-sm:space-y-4 max-sm:pt-6 md:flex'>
          <Image
            alt=''
            className='ml-5 object-cover'
            height={135}
            src='/images/office.png'
            width={110}
          />

          <Image
            alt=''
            className='object-cover'
            height={94}
            src='/images/subtract6.png'
            width={90}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <Image
          alt=''
          className='mt-20 px-4'
          height={613}
          src='/images/certificate.png'
          width={850}
        />
      </div>
    </Container>
  );
}
