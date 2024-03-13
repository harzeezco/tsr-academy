import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shared/components/forms';

export function SelectBox({
  content = [],
  courseInfo,
  placeholder = '',
  setCourseInfo,
}: {
  content: string[];
  courseInfo: any;
  placeholder: string;
  setCourseInfo: any;
}) {
  return (
    <Select>
      <SelectTrigger className='flex-1 rounded-[10px]'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='rounded-[10px] bg-white'>
        {content.map((value) => (
          <SelectGroup key={value}>
            <SelectItem
              className='cursor-pointer gap-3 whitespace-nowrap !rounded-[10px] capitalize transition-all hover:!bg-[#F5F5F7]  hover:!text-[#141522]'
              value={value}
              onClick={() =>
                setCourseInfo({ ...courseInfo, language: value })
              }
            >
              {value}
            </SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
