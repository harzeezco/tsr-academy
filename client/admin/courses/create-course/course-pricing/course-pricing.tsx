'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Download, Eye, Pencil } from 'lucide-react';
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
  Input,
  Textarea,
} from '@shared';

import { PopOver } from '@admin/courses/components/pop-over';
import { InputBox } from '@admin/shared';

export function PricingCard({
  amount,
  paymentPlan,
  plan,
}: {
  amount: string;
  paymentPlan: string;
  plan: string;
}) {
  return (
    <div className='w-full rounded-[10px] border-2 border-solid border-[#F4F3F4] p-4'>
      <h1 className='border-b-2 border-solid border-[#F4F3F4] pb-4 text-xl font-semibold text-dark-900'>
        Pricing
      </h1>

      <div className='flex items-center justify-between px-4 pb-4'>
        <div>
          <span>{plan}</span>
          <p className='text-2xl font-bold'>{amount}</p>
          <span>{paymentPlan}</span>
        </div>

        <div className='mt-10 flex flex-col items-center gap-2 rounded-[10px] bg-white p-2'>
          <button aria-label='Edit Module' type='button'>
            <Pencil className='text-[#757D8A] transition-all hover:text-dark-900' />
          </button>

          <button aria-label='View Module' type='button'>
            <Eye className='text-[#757D8A] transition-all hover:text-dark-900' />
          </button>

          <button aria-label='Download Module' type='button'>
            <Download className='text-[#757D8A] transition-all hover:text-dark-900' />
          </button>

          <PopOver
            otherContentClassName='w-[180px]'
            renderTrigger={() => (
              <button
                aria-label='More options'
                className='grid size-10 place-items-center rounded-full bg-[#EFEFEF]'
                type='button'
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  alt=''
                  height={25}
                  src='/icons/dots.svg'
                  width={25}
                />
              </button>
            )}
          >
            <p>Review Courses</p>
            <p>Edit courses</p>
          </PopOver>
        </div>
      </div>
    </div>
  );
}

const formSchema = z.object({
  payment: z.string().min(2, {
    message: 'payment must be at least 2 characters.',
  }),
  price: z.string().min(2, {
    message: 'Price must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
});

export function CoursePricing() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: '',
      payment: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='mt-7 grid grid-cols-[1.8fr_1.2fr] gap-4 pb-10'>
      <div className='rounded-[10px] border-2 border-solid border-[#F4F3F4] p-4 text-[#9D9DA1]'>
        <div className='mb-7 flex items-center gap-3 border-b-[1.5px] border-solid border-[#EFEFEF] pb-5'>
          <Button variant='recurring'>Recurring Payments</Button>

          <Button variant='slate'>One - Time Purchase</Button>

          <Button variant='slate'>Free</Button>
        </div>

        <h3 className='text-lg font-semibold text-dark-900'>
          Recurring Payments
        </h3>
        <p>
          Recurring Payments means repeated payments charged
          automatically at predefined intervals
        </p>

        <div className='mb-7 mt-5 flex items-center gap-3'>
          <Button size='slate' variant='slateBg'>
            Weekly
          </Button>

          <Button size='slate' variant='green'>
            Monthly
          </Button>

          <Button size='slate' variant='slateBg'>
            Yearly
          </Button>
        </div>

        <div className='mb-7 mt-4 flex items-center space-x-2'>
          <Checkbox
            className='rounded-md border-[1.5px] border-solid border-[#9D9DA1] data-[state=checked]:border-none data-[state=checked]:bg-[#3DBC4A] data-[state=checked]:text-white'
            id='terms'
          />
          <label
            className='text-sm font-medium leading-none text-dark-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='terms'
          >
            Enable Fixed Number of Payments
          </label>
        </div>

        <div>
          <InputBox
            placeholder='Please enter the number. E.g. : 6'
            renderInner={() => (
              <Button
                className='absolute right-0 top-0 h-full rounded-r-[10px] px-7 font-semibold'
                variant='lightOrange'
              >
                Monthly Payments
              </Button>
            )}
            type='text'
          />
        </div>

        <Form {...form}>
          <form
            className='mt-9 space-y-7'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <InputBox
                      placeholder='Please specify the price of your product'
                      type='number'
                      {...field}
                      renderInner={() => (
                        <span className='absolute right-0 top-1 mr-2 grid h-[80%] place-items-center rounded-[10px] !bg-[#9D9DA1] px-5 font-semibold text-white'>
                          USD
                        </span>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='payment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Plan</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-transparent'
                      placeholder='Plan Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please describe your payment plan briefly'
                      {...field}
                      className='bg-transparent placeholder:text-[#9D9DA1]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className='mr-5 rounded-[100px] py-3'
              size='slate'
              type='reset'
              variant='slateBg'
            >
              Discard
            </Button>

            <Button
              className='px-10'
              size='sm'
              type='submit'
              variant='primary'
            >
              Save
            </Button>
          </form>
        </Form>
      </div>

      <div className='space-y-5'>
        <PricingCard
          amount='$123.00'
          paymentPlan='One Time Payment Plan'
          plan='Basic Plan'
        />

        <PricingCard
          amount='$456.00'
          paymentPlan='One Time Payment Plan'
          plan='Premium'
        />
      </div>
    </div>
  );
}
