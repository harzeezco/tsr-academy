export type CardItemProps = {
  left: string;
  rotate: string;
  src: string;
  title: string[];
};

export const CardItem: CardItemProps[] = [
  {
    title: ['Fundamentals of Data Science'],
    src: 'science.png',
    rotate: 'rotate(-8deg)',
    left: '0px',
  },
  {
    title: ['Fundamentals of Cyber Security'],
    src: 'cyber.png',
    rotate: 'rotate(6deg)',
    left: '30px',
  },
];
