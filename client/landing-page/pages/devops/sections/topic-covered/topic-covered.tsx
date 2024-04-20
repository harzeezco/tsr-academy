'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

import { Container } from '@landing-page/shared';

const Topics = [
  {
    title: 'Containerization with Docker',
    description:
      ' Package and deploy applications in isolated environments using Docker.',
  },
  {
    title: 'Cloud-Native Technologies',
    description:
      'Get comfortable deploying scalable, reliable systems on AWS, Azure, and GCP.',
  },
  {
    title: 'Automate Everything',
    description:
      'Grasp the tools and techniques for automating builds, tests, and deployments with Jenkins and Git.',
  },
  {
    title: 'Kubernetes in Action',
    description:
      'Orchestrate and manage containerized applications with Kubernetes to ensure high availability.',
  },
  {
    title: 'Infrastructure as Code with Terraform',
    description:
      'Use Terraform to automate and manage your cloud infrastructure.',
  },
  {
    title: 'Continuous Integration/Continuous Deployment (CI/CD)',
    description:
      'Learn to build CI/CD pipelines that ensure smooth and frequent releases.',
  },
  {
    title: 'Continuous Integration/Continuous Deployment (CI/CD)',
    description:
      'Learn to build CI/CD pipelines that ensure smooth and frequent releases.',
  },
  {
    title: 'Continuous Integration/Continuous Deployment (CI/CD)',
    description:
      'Learn to build CI/CD pipelines that ensure smooth and frequent releases.',
  },
  {
    title: 'Monitoring and Logging',
    description:
      'Implement monitoring with Prometheus and visualizations with Grafana for actionable insights into system performance.',
  },
];

const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export function TopicCovered() {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <Container
      as='section'
      className='px-4 py-16 lg:px-7'
      style={{
        background: 'linear-gradient( #F2F3FF 0%, #EDF0F7 100%)',
      }}
      variant='outer'
    >
      <h1 className='h1bold mx-auto text-center'>
        What You Will Learn
      </h1>
      <div ref={container}>
        {isInView && (
          <motion.div
            animate='visible'
            className='mt-7 grid grid-cols-1 mx-auto max-w-[1000px] gap-5 sm:grid-cols-2 lg:grid-cols-3'
            exit='exit'
            initial='hidden'
            variants={containerVariants}
          >
            {Topics.map(({ description, title }, idx) => (
              <motion.div
                key={idx}
                className='topic group relative grid rounded-[18px] border border-solid border-blue-700 bg-transparent p-4 transition-all hover:bg-blue-700 hover:text-white'
                variants={childVariants}
              >
                <MoveUpRight className='size-7 justify-self-end text-blue-700 group-hover:text-white' />
                <h2 className='mt-4 text-2xl text-dark-900 group-hover:text-white'>
                  {title}
                </h2>
                <p className='max-w-[300px]'>{description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </Container>
  );
}
