import { Logo } from '@shared/index';

export function HeadContent({
  description = 'Welcome back! Please enter your details',
  heading = 'Welcome back',
}: {
  description?: string;
  heading?: string;
}) {
  return (
    <>
      <Logo src='/icons/tsr-logo.svg' />

      <div className='my-4'>
        <h3 className='text-3xl font-medium text-dark-900 '>
          {heading}
        </h3>

        <p className='mt-3 text-gray-500'>{description}</p>
      </div>
    </>
  );
}
