import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Editor,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shared';

import { SplitBtn } from '@admin/courses/components/split-btn';
import { useRequiredFields } from '@admin/courses/store/use-required-fields';
import { InputBox } from '@admin/shared';

import { options } from '../../data/data';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Course must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
});

export function CourseInfoContent() {
  const setActiveCourse = useRequiredFields(
    (state) => state.setActiveCourseOptions,
  );
  const activeCourse = useRequiredFields(
    (state) => state.activeCourseOptions,
  );
  // const [onFormSubmit, setOnFormSubmit] = React.useState(false);

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

  console.log(courseInfo);

  return (
    <div>
      <h1 className='mb-7 text-xl font-bold text-[#383940]'>
        Course Module
      </h1>

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
                  Course Name
                </FormLabel>
                <FormControl>
                  <InputBox
                    renderInner={() => (
                      <span className='absolute right-3 top-2 text-[#7C7C7C]'>
                        {field.value.length}/20
                      </span>
                    )}
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
                <FormLabel className='!font-semibold'>
                  Description
                </FormLabel>
                <FormControl>
                  <Editor
                    {...field}
                    placeholder='Add additional text below your module title help describe contents'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-6'>
            <SplitBtn
              btnText='New Lesson'
              options={options}
              onClick={() => setActiveCourse(activeCourse + 1)}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
