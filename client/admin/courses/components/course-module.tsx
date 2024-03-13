import {
  BookOpenCheck,
  BookType,
  Download,
  Eye,
  Flame,
  FolderOpenDot,
  Pencil,
  Play,
} from 'lucide-react';
import Image from 'next/image';

import { cn } from '@shared/index';

import { PopOver } from './pop-over';

type IconTypeProps = {
  embed: React.ReactNode;
  file: React.ReactNode;
  quiz: React.ReactNode;
  text: React.ReactNode;
  video: React.ReactNode;
};

const IconType: IconTypeProps = {
  text: <BookType />,
  video: <Play />,
  embed: <Flame />,
  quiz: <BookOpenCheck />,
  file: <FolderOpenDot />,
};

export type ModuleProps = {
  hasEdit?: boolean;
  minutes: string;
  title: string;
  type: keyof IconTypeProps;
};

export function CourseModule({
  className,
  hasEdit,
  minutes,
  title,
  type,
}: ModuleProps & { className?: string }) {
  return (
    <li>
      <div
        className={cn(
          'flex items-center justify-between rounded-[6px] bg-white px-4 py-3 shadow-md',
          className,
        )}
      >
        <div className='flex items-center gap-2'>
          <div className='grid size-8 place-items-center rounded-full bg-dark-900 p-1 text-white'>
            {IconType[type] || IconType.video}
          </div>
          <h3 className='font-medium text-dark-900'>{title}</h3>
          <span className='mx-2 size-[6px] rounded-full bg-[#9D9DA1]' />
          <span className='text-[#9D9DA1]'>{minutes}min</span>
        </div>

        {hasEdit && (
          <div className='flex items-center gap-2'>
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
        )}
      </div>
    </li>
  );
}
