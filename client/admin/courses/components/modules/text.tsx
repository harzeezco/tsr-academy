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
    message: 'Lesson Name must be at least 2 characters.',
  }),
  text: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
});

export default function Text() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      text: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h1 className='mb-7 text-xl font-bold text-[#383940]'>
        New Lesson
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
                <FormLabel>Lesson Name</FormLabel>
                <FormControl>
                  <InputBox {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='text'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lecture Text</FormLabel>
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
            className='flex items-center justify-center gap-1 rounded-[100px] !px-7'
            type='submit'
          >
            Save Lesson
          </Button>
        </form>
      </Form>
    </div>
  );
}
