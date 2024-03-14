'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shared';

import CustomInput from './custom-input';
import useLocation from '@shared/hooks/use-location';

const formSchema = z
  .object({
    fullname: z.string().regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    }),
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'Please Enter a valid email address',
      })
      .min(5),
    agreement: z.boolean().optional(),
    number: z
      .string()
      .min(6, 'Please enter your mobile number')
      .refine(
        (value) => {
          // Regular expression to match common phone number formats
          const phoneNumberRegex =
            /^\+?(\d{1,3})?[ .-]?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;

          return phoneNumberRegex.test(value);
        },
        {
          message: 'Please enter a valid phone number',
          path: ['number'],
        },
      ),
    how: z.string().optional(),
    howType: z.enum(['linkedin', 'facebook', 'instagram', 'others']),
    course: z.string(),
    courseType: z.enum(['devops', 'cloud-computing',]),
  })
  .refine(
    (data) => {
      if (data.howType && data.how) {
        return data.howType === data.how.toLowerCase();
      }

      return true;
    },
    {
      message: 'Please, select an option',
      path: ['howType'],
    },
  ).refine(
    (data) => {
      if (data.courseType && data.course) {
        return data.courseType === data.course.toLowerCase();
      }

      return true;
    },
    {
      message: 'Please, select an option',
      path: ['courseType'],
    },
  );

export function FormBox() {
  const { country } = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      number: '',
      howType: undefined,
      agreement: false,
      courseType: undefined
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('sign in');
    const { agreement, courseType, email, fullname, howType, number } = values;

    const data = {
      full_name: fullname,
      email,
      number,
      how: howType,
      continent: country,
      agreement,
      course: courseType
    };

    console.log(values);

    if (agreement) {
      const data = { email };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch('/api/newsletter', options)
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('/api/course', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        className='space-y-8'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='fullname'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput
                  icon='/icons/message.svg'
                  placeholder='Email Address*'
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='number'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput
                  icon='/icons/phone.svg'
                  placeholder='Phone Number*'
                  type='number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='howType'
          render={({ field }) => (
            <FormItem className=''>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='h-12 rounded-[12px] !border-[1.5px] !border-green-100 !bg-[#17474A]'>
                    <div className='flex items-center gap-2'>
                      <Image
                        alt='message'
                        className='left-4 top-3'
                        height={24}
                        src='/icons/speech.svg'
                        width={24}
                      />
                      <SelectValue
                        className='self-start'
                        placeholder='How did  you hear about us? '
                      />
                    </div>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='rounded-[12px] !border-green-100 !bg-[#17474A] text-white'>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='linkedin'
                  >
                    Linkedin
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='facebook'
                  >
                    Facebook
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='instagram'
                  >
                    Instagram
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='others'
                  >
                    Others
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='courseType'
          render={({ field }) => (
            <FormItem className=''>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='h-12 rounded-[12px] !border-[1.5px] !border-green-100 !bg-[#17474A]'>
                    <div className='flex items-center gap-2'>
                      <Image
                        alt='message'
                        className='left-4 top-3'
                        height={24}
                        src='/icons/speech.svg'
                        width={24}
                      />
                      <SelectValue
                        className='self-start'
                        placeholder='Select a Course'
                      />
                    </div>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='rounded-[12px] !border-green-100 !bg-[#17474A] text-white'>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='devops'
                  >
                    Devops
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-green-500'
                    value='cloud-computing'
                  >
                    Cloud Computing
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormField
            control={form.control}
            name='agreement'
            render={({ field }) => (
              <FormItem className='mb-2 flex flex-row items-start space-x-3 space-y-0'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    className='rounded-full bg-white data-[state=checked]:bg-green-500 data-[state=checked]:text-white'
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel className='!-mb-4 !space-y-0 !text-white'>
                    I would like to receive updates and offers from
                    TSR Learning
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <p>
            By submitting this form you have and agreed to our{' '}
            <button className='text-green-500' type='button'>
              T&C’s
            </button>{' '}
            and{' '}
            <button className='text-green-500' type='button'>
              Privacy Policy
            </button>
          </p>
        </div>

        <Button
          className='flex items-center justify-center gap-3 !rounded-[45px]'
          size='full'
          type='submit'
          variant='lightgreen'
        >
          Submit
          <Image
            alt='message'
            className=''
            height={24}
            src='/icons/spin.svg'
            width={24}
          />
        </Button>
      </form>
    </Form>
  );
}
