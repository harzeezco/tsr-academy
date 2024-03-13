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

import RenderFooter from '../_shared/set-password/render-footer';
import RenderHeader from '../_shared/set-password/render-header';
import SetPasswordAuth from '../_shared/set-password/set-password-auth';

const formSchema = z.object({
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .email('Invalid email format'),
});

function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <SetPasswordAuth
      renderHeader={() => (
        <RenderHeader
          desc='Enter your email address.'
          instructions='Instruction to reset your password will be sent to you. Please check your email'
        />
      )}
    >
      <Form {...form}>
        <form
          className='space-y-8 text-center'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='text-start'>
                <FormLabel className='font-medium text-dark-900'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='john_doe@outlook.com'
                    type='text'
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

export default ForgotPassword;
