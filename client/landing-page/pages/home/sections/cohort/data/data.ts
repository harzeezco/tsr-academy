export type CohortProps = {
  backgroundImage: string;
  button: string;
  description: string;
  gradient: string;
  heading: string;
  href: string;
  paddingBottom: string;
  paddingTop: string;
  title: string;
};

export const CohortData: CohortProps[] = [
  {
    title: 'Cohort I',
    heading:
      "<h1>Become an Industry-Ready <span class='!text-orange-700'>DevOps</span> Expert</h1>",
    description:
      'Join our immersive DevOps Engineering Program and gain the skills to streamline software development and deployment processes. In this hands-on program, you’ll learn the art and science of improving efficiency, enhancing deployment frequency, and achieving faster time to market.',
    href: '/devops',
    button: 'Join Cohort I',
    backgroundImage: 'under-image.png',
    gradient: 'linear-gradient(to right, #024ba5, #105dbd)',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  {
    title: 'Cohort II',
    heading:
      "<h1>Become an Industry-Ready <span class='!text-orange-700'>Cloud Computing</span> Expert</h1>",
    description:
      "Dive into the dynamic world of cybersecurity with TSR Learning. Whether you're starting out or scaling up, our  program will equip you with the skills and knowledge to excel in this field. Gain hands-on experience working on real-world AWS and Azure cloud architecture and infrastructure projects",
    href: '/cloud-computing',
    button: 'Join Cohort II',
    backgroundImage: 'under-image2.png',
    gradient: 'linear-gradient(to right, #00AABB, #08808C)',
    paddingBottom: '3rem',
    paddingTop: '3rem',
  },
];
