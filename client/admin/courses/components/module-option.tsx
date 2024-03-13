import Image from 'next/image';

import { useCourse } from '../provider/course-provider';
import Modal from './modal/modal';

export function ModuleOption({
  active,
  icon,
  label,
}: {
  active: string;
  icon?: string;
  label: string;
}) {
  const { setActiveModule } = useCourse();

  return (
    <Modal>
      <button
        className='flex w-full gap-3 whitespace-nowrap rounded-[10px] px-4  py-3 capitalize transition-all hover:bg-[#F5F5F7] hover:font-medium hover:text-[#141522]'
        type='button'
        onClick={() => setActiveModule(active)}
      >
        {icon && (
          <Image
            alt={label}
            height={24}
            src={`/icons/${icon}`}
            width={24}
          />
        )}
        {label}
      </button>
    </Modal>
  );
}
