import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
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
  cn,
} from '@shared';

import { InputBox } from '@admin/shared';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Course must be at least 2 characters.',
  }),
});

export default function Video() {
  const [dragging, setDragging] = React.useState(false);
  // const [onFormSubmit, setOnFormSubmit] = React.useState(false);

  const [courseVideo, setCourseVideo] = React.useState({
    name: '',
    thumbnail: '',
  });

  console.log(courseVideo);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setCourseVideo({
      ...courseVideo,
      name: values.name,
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if (reader.readyState === 2) {
          setCourseVideo({
            ...courseVideo,
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
    console.log(dragging);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        setCourseVideo({
          ...courseVideo,
          thumbnail: reader.result as string,
        });
      });
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <h1 className='mb-7 text-xl font-bold text-[#383940]'>
        Course Information
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
                        0/20
                      </span>
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <p className='mb-2 font-semibold'>Lecture Video</p>
            <div
              className={cn(
                'border-[3px] border-dashed border-[#1152A2]  min-h-[178px] grid place-items-center rounded-[11px]',
                courseVideo.thumbnail
                  ? 'p-1 bg-transparent'
                  : 'p-6 bg-[#EDF5FF] ',
              )}
            >
              <input
                accept='video/*'
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
                {courseVideo.thumbnail ? (
                  <video
                    controls
                    className='max-h-full w-full !rounded-[11px] object-cover'
                    src={courseVideo.thumbnail}
                  >
                    {' '}
                    <track
                      kind='captions'
                      label='English captions'
                      src='captions.vtt'
                      srcLang='en'
                    />
                  </video>
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
                    <span className='text-sm'>
                      .mp4 (max. 1280 x 720px)
                    </span>
                  </div>
                )}
              </label>
            </div>
          </div>

          <Button
            className='flex items-center justify-center gap-1 rounded-[10px]'
            type='submit'
          >
            Save Lesson
          </Button>
        </form>
      </Form>
    </div>
  );
}
