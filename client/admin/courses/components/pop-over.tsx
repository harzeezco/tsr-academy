import { cn } from '@shared/index';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@admin/shared';

type PropOverProps = {
  children: React.ReactNode;
  otherContentClassName?: string;
  renderTrigger: () => React.ReactNode;
};

export function PopOver({
  children,
  otherContentClassName,
  renderTrigger,
}: PropOverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{renderTrigger()}</PopoverTrigger>
      <PopoverContent
        className={cn(
          'w-[230px] bg-white mr-4',
          otherContentClassName,
        )}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
