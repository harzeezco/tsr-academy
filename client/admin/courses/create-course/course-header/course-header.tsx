import Image from 'next/image';

import { Button, cn } from '@shared';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@admin/courses/components/modal/alert-dialog';
import { PopOver } from '@admin/courses/components/pop-over';

export function CourseHeader({ submitText }: { submitText: string }) {
  return (
    <div className='flex items-center justify-end gap-4'>
      <PopOver
        otherContentClassName='w-[180px]'
        renderTrigger={() => (
          <button
            aria-label='More options'
            className='rounded-[10px] bg-[#EFEFEF] px-3 py-[5px]'
            type='button'
          >
            <Image
              alt=''
              height={20}
              src='/icons/dots.svg'
              width={20}
            />
          </button>
        )}
      >
        <p>Review Courses</p>
        <p>Edit courses</p>
      </PopOver>

      <AlertDialog>
        <AlertDialogTrigger>
          <span
            className={cn(
              'rounded-[10px] bg-[#EFEFEF] px-4 py-1 text-[15px] font-semibold',
            )}
          >
            Save
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent className='rounded-[10px] !bg-[#F8F8F8]'>
          <AlertDialogHeader>
            <AlertDialogTitle>Save course to draft?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to save this course to draft? You
              can always come back and edit it later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button
        className='rounded-[10px] !py-1 px-4 text-[15px] font-semibold'
        type='submit'
        variant='primary'
      >
        {submitText}
      </Button>
    </div>
  );
}
