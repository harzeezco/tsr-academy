import { ReactNode } from 'react';

export interface AuthFormProps {
  children: ReactNode;
  renderHeader: () => ReactNode;
}

function SetPasswordAuth({ children, renderHeader }: AuthFormProps) {
  return (
    <section className='grid min-h-screen place-items-center p-6'>
      <div className='w-full max-w-[420px] rounded-[10px] p-8 text-center shadow-md'>
        {renderHeader()}

        {children}
      </div>
    </section>
  );
}

export default SetPasswordAuth;
