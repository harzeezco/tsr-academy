'use client';

import { ReactNode } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

import { Form } from '@shared';

import AuthBtns from './auth-btns';

export interface AuthFormProps<T extends FieldValues> {
  children: ReactNode;
  form: UseFormReturn<T>;
  onSubmit?: SubmitHandler<any>;
  renderFooter: () => ReactNode;
  renderHeader: () => ReactNode;
}

export function AuthForm<T extends FieldValues>({
  children,
  form,
  onSubmit,
  renderFooter,
  renderHeader,
}: AuthFormProps<T>) {
  return (
    <Form {...form}>
      <form className='flex-1 space-y-8' onSubmit={onSubmit}>
        <div className='mx-auto max-w-md py-10 max-md:px-8'>
          {renderHeader()}

          <div className='flex flex-col gap-4'>{children}</div>

          <div>
            <AuthBtns />
          </div>

          {renderFooter()}
        </div>
      </form>
    </Form>
  );
}
