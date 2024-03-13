export type OptionsProps = {
  active: string;
  activeIcon: string;
  icon: string;
  label: string;
};

export const options: OptionsProps[] = [
  {
    label: 'Add Text',
    active: 'text',
    icon: 'light-pen.svg',
    activeIcon: 'dark-pen.svg',
  },
  {
    label: 'Add embed',
    active: 'embed',
    icon: 'light-pen.svg',
    activeIcon: 'dark-pen.svg',
  },
  {
    label: 'Video',
    active: 'video',
    icon: 'light-pen.svg',
    activeIcon: 'dark-pen.svg',
  },
  {
    label: 'Add quiz',
    active: 'quiz',
    icon: 'light-pen.svg',
    activeIcon: 'dark-pen.svg',
  },
  {
    label: 'Add Files',
    active: 'file',
    icon: 'light-pen.svg',
    activeIcon: 'dark-pen.svg',
  },
];
