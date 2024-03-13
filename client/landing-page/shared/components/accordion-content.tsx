import { AnimatePresence } from 'framer-motion';

import { cn } from '@shared/index';

export function AccordionContent({
  desc,
  isOpen,
  title,
}: {
  desc: string;
  isOpen: boolean;
  title: string;
}) {
  return (
    <AnimatePresence>
      <div>
        <h1 className='mb-3 text-xl text-dark-900 md:text-2xl'>
          {title}
        </h1>

        <div
          className={cn(
            isOpen
              ? 'opacity-100 visible mt-5'
              : '!h-0 opacity-0 invisible overflow-hidden',
            'transition-all flex flex-col gap-2',
          )}
        >
          <p className='max-w-2xl'>{desc}</p>
        </div>
      </div>
    </AnimatePresence>
  );
}
