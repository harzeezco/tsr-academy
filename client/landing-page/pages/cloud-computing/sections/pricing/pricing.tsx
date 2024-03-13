import Image from 'next/image';
import Link from 'next/link';

import { Button, cn } from '@shared/index';

import { Container } from '@landing-page/shared';

type PricingProps = {
  amount: string;
  btnClasses: string;
  desc: string;
  details: string[];
  footerText: string;
  icon: string;
  plan: string;
  type: string;
};

const pricingList: PricingProps[] = [
  {
    icon: 'flyout.svg',
    type: 'flex',
    plan: 'FlexPay Plan',
    desc: 'Ease into Your Education with Flexibility',
    amount: '278',
    details: [
      'Break down the $1500 course fee into three smaller, manageable installments, easing the immediate financial load.',
      'Start your Cloud Engineering Bootcamp immediately without delay, gaining instant access to all course materials and live sessions.',
      'Instalment payments without any additional interest charges, keeping your costs transparent and predictable.',
      'Experience hands-on projects and expert mentorship, without any restrictions',
    ],
    btnClasses: 'hover:bg-[#08808C] hover:text-white',
    footerText: '2 spots left for this cohort ',
  },
  {
    icon: 'flyout.svg',
    type: 'advance',
    plan: 'AdvancePay Plan',
    desc: 'Invest Upfront and Reap the Rewards',
    amount: '1500',
    details: [
      'Save 15% on your tuition, reducing the total cost to $1275, with a one-time full payment.',
      'Pay upfront and enjoy peace of mind with no further payments looming over your learning journey.',
      "Secure your spot in the bootcamp with priority enrolment, ensuring you don't miss out on your desired start date.",
      'Gain unfettered access to all bootcamp features from the get-go, including premium content and exclusive sessions.',
    ],
    btnClasses: 'hover:bg-[#08808C] hover:text-white',
    footerText: '2 spots left for this cohort ',
  },
];

export function Pricing() {
  return (
    <Container
      className='px-2 py-16 lg:px-7'
      style={{ background: '#F8FFFE' }}
      variant='outer'
    >
      <h1 className='mx-auto text-center text-4xl text-[#00828F] md:text-6xl'>
        Simple Pricing
      </h1>
      <p className='mx-auto mt-3 max-w-2xl text-center md:text-lg'>
        Choose from our two plans – Standard, Premium and Enterprise
        or contact us for more details about our custom plans.
      </p>

      <ul className='mt-16 flex items-center justify-center gap-10 max-lg:flex-col'>
        {pricingList.map((item) => (
          <li
            key={item.plan}
            className='relative w-full max-w-[450px]'
          >
            {item.type === 'advance' && (
              <button
                disabled
                className='absolute right-4 top-6 rounded-[8px] px-4 py-2 text-sm font-medium text-white'
                style={{
                  background: 'linear-gradient(#00AABB, #08808C)',
                }}
                type='button'
              >
                Best Option
              </button>
            )}
            <div className='rounded-t-[24px] bg-[#E7F9FB] p-5'>
              <Image
                alt=''
                className=''
                height={53}
                src={`/icons/${item.icon}`}
                width={54}
              />
              <h3 className='mt-5 text-2xl font-bold text-dark-900 md:text-3xl'>
                {item.plan}
              </h3>
              <span className='mt-2 text-lg text-gray-500'>
                {item.desc}
              </span>

              <p
                className={cn(
                  'mt-2 text-5xl relative font-bold text-dark-900',
                  item.type === 'flex'
                    ? "after:content-['/WK'] after:absolute after:text-base after:top-2 after:ml-0.5 after:text-[#667085] after:font-bold"
                    : '',
                )}
              >
                ${item.amount}
              </p>

              <Link href='#enrol'>
                <Button
                  className={cn(
                    'mt-5 w-full rounded-[41px] py-3 text-xl font-bold',
                    item.btnClasses,
                  )}
                  variant={
                    item.type === 'advance' ? 'black' : 'transparent'
                  }
                >
                  Begin your journey now
                </Button>
              </Link>

              <ul className='mt-5 flex flex-col items-center justify-center'>
                {item.details.map((detail) => (
                  <li className='mt-2 flex items-center gap-2'>
                    <Image
                      alt=''
                      height={25}
                      src='/icons/checked.svg'
                      width={25}
                    />

                    <span className='font-medium text-[#00828F]'>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex items-center justify-center rounded-b-[24px] bg-[#00828F] py-4 text-xl font-medium text-white'>
              {item.footerText}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
