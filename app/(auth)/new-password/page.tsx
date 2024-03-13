'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@shared';

import { NewPasswordSchema } from '../_shared';
import RenderFooter from '../_shared/set-password/render-footer';
import RenderHeader from '../_shared/set-password/render-header';
import SetPasswordAuth from '../_shared/set-password/set-password-auth';

function NewPassword() {
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <SetPasswordAuth
      renderHeader={() => (
        <RenderHeader
          heading='Create New Password'
          instructions='Please create a new password that you don’t use on any other site'
        />
      )}
    >
      <Form {...form}>
        <form
          className='space-y-4 text-center'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='text-start'>
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

          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='text-start'>
                <FormLabel className='font-medium text-dark-900'>
                  Confirm Password
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

          <RenderFooter />
        </form>
      </Form>
    </SetPasswordAuth>
  );
}

export default NewPassword;
