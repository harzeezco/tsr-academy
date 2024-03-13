import {
  AboutDetailsType,
  CourseProp,
  HeaderNavProp,
} from './index.d';

export const HeaderNav: HeaderNavProp[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Courses',
    route: '',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
];

export const AboutDetails: AboutDetailsType[] = [
  {
    label: 'Our Story',
    desc: 'Born from a passion for technology and education, TSR Learning is more than just an online learning platform. We are a community dedicated to nurturing tech talents across Nigeria and beyond. Our founders, seasoned in both education and tech industries, saw the need for accessible, flexible, and practical technical education.',
    src: 'about-2.png',
    coverBackground: 'about-1-cover.png',
  },

  {
    label: 'Our Approach',
    desc: "We're committed to a learning experience that's as engaging as it is informative. Our interactive online platform allows for a personalised learning journey, adaptable to your pace and schedule. We blend theoretical knowledge with practical applications, ensuring our students are industry-ready.",
    src: 'about-1.png',
    coverBackground: 'about-2-cover.webp',
  },
];

export const courses: CourseProp[] = [
  {
    thumbnail: 'course.png',
    difficulty: 'Intermediate',
    difficultyRate: '',
    title: 'DevOps Essentials: From Automation to Integration',
    rating: 4.5,
    metrics: [
      {
        count: '500',
        title: 'Student',
        icon: 'user.svg',
      },
      {
        count: '10',
        title: 'Modules',
        icon: 'modules.svg',
      },
      {
        count: '1h 30m',
        title: '',
        icon: 'clock.svg',
      },
    ],
  },
  {
    thumbnail: 'course.png',
    difficulty: 'Intermediate',
    difficultyRate: '',
    title: 'DevOps Essentials: From Automation to Integration',
    rating: 4.5,
    metrics: [
      {
        count: '500',
        title: 'Student',
        icon: 'user.svg',
      },
      {
        count: '10',
        title: 'Modules',
        icon: 'modules.svg',
      },
      {
        count: '1h 30m',
        title: '',
        icon: 'clock.svg',
      },
    ],
  },
  {
    thumbnail: 'course.png',
    difficulty: 'Intermediate',
    difficultyRate: '',
    title: 'DevOps Essentials: From Automation to Integration',
    rating: 4.7,
    metrics: [
      {
        count: '500',
        title: 'Student',
        icon: 'user.svg',
      },
      {
        count: '10',
        title: 'Modules',
        icon: 'modules.svg',
      },
      {
        count: '1h 30m',
        title: '',
        icon: 'clock.svg',
      },
    ],
  },
];
