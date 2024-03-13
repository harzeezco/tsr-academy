'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@shared';

import {
  Auth,
  AuthForm,
  RenderFooter,
  SignInSchema,
} from '../_shared';
import { RenderHeader } from '../_shared/render-header';

function SignIn() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Auth>
      <AuthForm
        form={form}
        renderFooter={() => (
          <RenderFooter
            href='/sign-up'
            link='Sign up for free'
            text='Don’t have an account?'
          />
        )}
        renderHeader={() => <RenderHeader />}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-medium text-dark-900'>
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter your email'
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-orange-700' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-medium text-dark-900'>
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter your password'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-orange-700' />
            </FormItem>
          )}
        />
      </AuthForm>
    </Auth>
  );
}

export default SignIn;
