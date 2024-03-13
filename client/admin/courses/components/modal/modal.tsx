'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';
import Image from 'next/image';

import { useCourse } from '../../provider/course-provider';
import Embed from '../modules/embed';
import File from '../modules/file';
import Quiz from '../modules/quiz';
import Text from '../modules/text';
import Video from '../modules/video';

const Modules = [
  {
    label: 'text',
    Component: Text,
  },
  {
    label: 'embed',
    Component: Embed,
  },
  {
    label: 'video',
    Component: Video,
  },
  {
    label: 'quiz',
    Component: Quiz,
  },
  {
    label: 'file',
    Component: File,
  },
];

function Modal({ children }: { children: React.ReactNode }) {
  const { activeModule } = useCourse();

  const filteredComponent = Modules.filter(
    (component) => component.label === activeModule,
  );

  return (
    <div>
      {filteredComponent.map(({ Component }, idx) => (
        <Dialog.Root key={idx}>
          <Dialog.Trigger asChild className='!text-black'>
            {children}
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 z-[999] grid place-items-center overflow-y-auto bg-[rgba(0,0,0,0.3)]'>
              <Dialog.Content className='relative w-full min-w-[300px] rounded-sm !bg-white p-[30px] sm:max-w-[825px]'>
                <Dialog.Close asChild>
                  <button
                    aria-label='Close'
                    className='absolute right-[30px] top-[20px] inline-flex size-12 appearance-none items-center justify-center rounded-full border-none bg-[#F0F0F1] transition-all hover:border-2 hover:border-solid hover:border-blue-700/20 focus:shadow-blue-700/20 focus:outline-none'
                    type='button'
                  >
                    <Image
                      alt='Close'
                      height={34}
                      src='/icons/close-modal.svg'
                      width={34}
                    />
                  </button>
                </Dialog.Close>
                <Component />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}

export default Modal;
