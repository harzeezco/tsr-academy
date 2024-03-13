import Image from 'next/image';

import { Button } from '@shared/index';

function AuthBtns({
  signupAuth = 'Sign Up',
  socialAuth = 'Sign Up with Google',
}: {
  signupAuth?: string;
  socialAuth?: string;
}) {
  return (
    <>
      <Button
        className='mt-5 flex w-full items-center justify-center gap-3'
        size='md'
        type='submit'
        variant='signup'
      >
        {signupAuth}{' '}
        <Image
          alt='Arrow'
          height={20}
          src='/icons/arrow-right.svg'
          width={20}
        />
      </Button>

      <Button
        className='mt-5 flex w-full items-center justify-center gap-3'
        size='md'
        type='submit'
        variant='google'
      >
        <Image
          alt='Arrow'
          height={20}
          src='/icons/google.svg'
          width={20}
        />{' '}
        {socialAuth}
      </Button>
    </>
  );
}

export default AuthBtns;
