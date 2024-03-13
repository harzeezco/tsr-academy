import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Editor,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shared';

import { InputBox } from '@admin/shared';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Course must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
});

export default function Quiz() {
  const [courseInfo, setCourseInfo] = React.useState({
    name: '',
    description: '',
    thumbnail: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setCourseInfo({
      ...courseInfo,
      name: values.name,
      description: values.description,
    });
  }

  return (
    <div>
      <p className='text-xl font-bold text-[#383940]'>New Lesson</p>

      <div className='my-5'>
        <h1 className='text-xl font-bold text-[#383940]'>Multiple</h1>
        <p className='text-[#353744]'>
          Select which type of quiz you want to set and then type your
          question
        </p>
      </div>

      <Form {...form}>
        <form
          className='space-y-8'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='!font-semibold'>
                  Quiz Name
                </FormLabel>
                <FormControl>
                  <InputBox
                    renderInner={() => (
                      <span className='absolute right-3 top-2 text-[#7C7C7C]'>
                        0/20
                      </span>
                    )}
                    {...field}
                    placeholder='e.g Introduction'
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
                <FormLabel className='!font-semibold'>
                  Quiz Description
                </FormLabel>
                <FormControl>
                  <Editor
                    {...field}
                    placeholder='Add lesson content'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='flex items-center justify-center gap-1 rounded-[10px]'
            type='submit'
          >
            New Module
          </Button>
        </form>
      </Form>
    </div>
  );
}
