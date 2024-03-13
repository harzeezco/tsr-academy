import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@shared/index';

function RenderFooter({
  btnText = 'Submit',
  linkText = 'Sign In',
}: {
  btnText?: string;
  linkText?: string;
}) {
  return (
    <>
      <Button
        className='flex w-full items-center justify-center gap-3 rounded-[10px]'
        size='md'
        type='submit'
        variant='primary'
      >
        {btnText}{' '}
        <Image
          alt='Arrow'
          height={20}
          src='/icons/arrow-forgot.svg'
          width={20}
        />
      </Button>

      <Link
        className='mt-3 font-medium text-blue-700'
        href='/sign-in'
      >
        {linkText}
      </Link>
    </>
  );
}

export default RenderFooter;
