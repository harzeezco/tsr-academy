/* eslint-disable no-return-assign */
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Editor } from '@tinymce/tinymce-react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
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
  cn,
} from '@shared';

import { useRequiredFields } from '@admin/courses/store/use-required-fields';
import { InputBox } from '@admin/shared';

import { CourseHeader } from '../course-header';

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Course must be at least 2 characters.',
    }),
    subtitle: z.string().min(2, {
      message: 'Course must be at least 2 characters.',
    }),
    description: z.string().min(2, {
      message: 'Description must be at least 2 characters.',
    }),
    categoryType: z.enum([
      'web development',
      'cloud computing',
      'devops',
      'cybersecurity',
      'data science',
      'software engineering',
    ]),
    levelType: z.enum(['master', 'intermediate', 'beginner']),
    category: z.string().optional(),
    level: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.categoryType && data.category) {
        return data.categoryType === data.category.toLowerCase();
      }

      return true;
    },
    {
      message: 'Category type must match the selected category.',
      path: ['categoryType'],
    },
  )
  .refine(
    (data) => {
      if (data.levelType && data.level) {
        return data.levelType === data.level.toLowerCase();
      }

      return true;
    },
    {
      message: 'level type must match the selected level.',
      path: ['levelType'],
    },
  );

export function CourseInformation() {
  const [dragging, setDragging] = React.useState(false);
  const setActiveCourse = useRequiredFields(
    (state) => state.setActiveCourseOptions,
  );
  const activeCourse = useRequiredFields(
    (state) => state.activeCourseOptions,
  );

  const [courseInfo, setCourseInfo] = React.useState({
    name: '',
    description: '',
    subtitle: '',
    benefits: [
      {
        title: '',
      },
    ],
    thumbnail: '',
    levelType: '',
    categoryType: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      subtitle: '',
    },
  });

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if (reader.readyState === 2) {
          setCourseInfo({
            ...courseInfo,
            thumbnail: reader.result as string,
          });
        }
      });
      reader.readAsDataURL(file);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(false);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        setCourseInfo({
          ...courseInfo,
          thumbnail: reader.result as string,
        });
      });
      reader.readAsDataURL(file);
    }
  }

  function handleBenefitChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const newBenefits = [...courseInfo.benefits];

    newBenefits[index].title = event.target.value;
    setCourseInfo({
      ...courseInfo,
      benefits: newBenefits,
    });
  }
  const addBenefit = () => {
    setCourseInfo({
      ...courseInfo,
      benefits: [...courseInfo.benefits, { title: '' }],
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setCourseInfo({
      ...courseInfo,
      name: values.name,
      subtitle: values.name,
      description: values.description,
      categoryType: values.categoryType,
      levelType: values.levelType,
    });

    if (courseInfo.thumbnail) {
      setActiveCourse(activeCourse + 1);
    }

    form.reset();
    console.log(dragging);
  }

  return (
    <div className='mt-7 rounded-[20px] border-[1.5px] border-solid border-[#F4F3F4] bg-white px-10 !pb-10 pt-7'>
      <Form {...form}>
        <form
          className='space-y-8'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CourseHeader submitText='Proceed to Add Lectures' />

          <h1 className='mb-7 text-xl font-bold text-[#383940]'>
            Course Information
          </h1>

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
            name='subtitle'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='!font-semibold'>
                  Course Subtitle
                </FormLabel>
                <FormControl>
                  <InputBox
                    placeholder='Enter a short subtitle for  this course'
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
                  Course Description
                </FormLabel>
                <FormControl className='mt-3.5'>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'codesample',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                      ],
                      toolbar:
                        'undo redo | ' +
                        'codesample | bold italic forecolor | alignleft aligncenter |' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                      content_style:
                        'body { font-family: Inter; font-size:16px }',
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) =>
                      field.onChange(content)
                    }
                    // onInit={(_evt, editor) => (editorRef.current = editor)}
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <div className='flex items-start gap-14'>
            <FormField
              control={form.control}
              name='categoryType'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='!font-semibold'>
                    Course Category
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className='rounded-[10px] bg-white'>
                        <SelectValue placeholder='Select Category' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='!bg-[#fcfcfc]'>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='web development'
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='cloud computing'
                      >
                        Cloud Computing
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='devops'
                      >
                        DevOps
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='cybersecurity'
                      >
                        Cybersecurity
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='data science'
                      >
                        Data Science
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='software engineering'
                      >
                        Software Engineering
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='levelType'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='!font-semibold'>
                    Course Level
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className='rounded-[10px] bg-white'>
                        <SelectValue placeholder='Level' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='!bg-[#fcfcfc]'>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#f5f5f7] hover:!text-[#141522]'
                        value='master'
                      >
                        Master
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='intermediate'
                      >
                        Intermediate
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
                        value='beginner'
                      >
                        Beginner
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='rounded-[10px] border-2 border-solid border-[#F4F3F4] p-4 px-6 text-[#9D9DA1]'>
            <h2 className='text-xl font-bold text-dark-900'>
              What Students Will Learn
            </h2>
            <p>Explain what the students will learn.</p>
            <div className='mb-4 mt-6'>
              {courseInfo.benefits.map((benefit, index) => (
                <div key={index} className='mb-4 mt-6'>
                  <FormItem>
                    <FormLabel className='!font-semibold'>
                      Benefit {index + 1}
                    </FormLabel>
                    <FormControl>
                      <InputBox
                        placeholder='Enter benefit'
                        renderInner={() => (
                          <span className='absolute right-3 top-2 text-[#7C7C7C]'>
                            0/20
                          </span>
                        )}
                        value={benefit.title}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>,
                        ) => handleBenefitChange(index, e)}
                      />
                    </FormControl>
                  </FormItem>
                </div>
              ))}
            </div>
            <button
              className='flex items-center gap-1 rounded-[100px] bg-transparent px-4 py-2 text-sm font-semibold text-blue-700 transition-all hover:bg-[#EDF5FF]'
              type='button'
              onClick={addBenefit}
            >
              <Plus className='size-5' />
              <span>Add More Benefit</span>
            </button>
          </div>

          <div className='rounded-[10px] border-2 border-solid border-[#F4F3F4] p-4 px-6 pb-7 text-[#9D9DA1]'>
            <h3 className='font-semibold text-dark-900 '>
              Course Cover
            </h3>
            <p className='max-w-md text-[15px]'>
              Upload your course image here. It must meet our course
              image quality standards to be accepted.
            </p>
            <div
              className={cn(
                'border-[3px] border-dashed border-[#1152A2]  min-h-[178px] grid place-items-center rounded-[11px] mt-7',
                courseInfo.thumbnail
                  ? 'p-1 bg-transparent'
                  : 'p-6 bg-[#EDF5FF] ',
              )}
            >
              <input
                accept='image/*'
                className='hidden rounded-[11px]'
                id='file'
                type='file'
                onChange={handleFileChange}
              />
              <label
                className='rounded-[11px]'
                htmlFor='file'
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {courseInfo.thumbnail ? (
                  <img
                    alt='thumbnail'
                    className='max-h-full w-full !rounded-[11px] object-cover'
                    src={courseInfo.thumbnail}
                  />
                ) : (
                  <div className='grid place-items-center'>
                    <Image
                      alt='upload'
                      height={35}
                      src='/icons/upload.svg'
                      width={35}
                    />
                    <span>
                      {' '}
                      Drag and Drop or Choose a file to upload
                    </span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className='flex justify-end'>
            <Button
              className='mr-5 rounded-[100px] py-3'
              size='slate'
              type='reset'
              variant='slateBg'
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button className='rounded-[100px] px-7' type='submit'>
              Proceed to Add Lectures
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
