import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@landing-page/shared';

const articles = [
  {
    title:
      'DevOps Uncovered: How Automation is Changing the Tech Industry',
    date: 'Jan 10, 2023',
    image: '/images/course.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/web.png',
  },
  {
    title:
      'DevOps Uncovered: How Automation is Changing the Tech Industry',
    date: 'Jan 10, 2023',
    image: '/images/course.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/web.png',
  },
];

const insight = [
  {
    title: 'Demystifying Data Science: What It Is and Why It Matters',
    date: 'Jan 10, 2023',
    image: '/images/ai.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/hand-on-key.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/ai.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/dev.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/web.png',
  },
  {
    title:
      'Cloud Engineering 101: Essentials Every Beginner Should Know',
    date: 'Dec 15, 2022',
    image: '/images/dev.png',
  },
];

const videos = [
  {
    title:
      'Building Your First App with Kubernetes: A Step-by-Step Tutorial',
    image: '/images/kuber.png',
  },
  {
    title:
      "Unlocking the Power of Machine Learning: A Beginner'Power of Machine Learning: A Beginner' Power of Machine Learning: A Beginner's Guide",
    image: '/images/cloud.png',
  },
  {
    title:
      'The Future of AI: Trends and Predictions for the Next Decade',
    image: '/images/data-science.png',
  },
  {
    title:
      'The Journey to Becoming a Data Scientist: Skills and Pathways',
    image: '/images/data-science.png',
  },
];

export default function BlogPage() {
  return (
    <main>
      <Container
        style={{
          background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
        }}
        variant='outer'
      >
        <Container as='section' className='py-16'>
          <h1 className='h1bold'>
            Latest <span className='text-blue-700'>Blog</span>
          </h1>

          <div className='mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
            {articles.map((blog) => (
              <article
                key={blog.title}
                className='grid w-full rounded-[10px] bg-white p-2'
              >
                <Image
                  alt='blog image'
                  className='w-full'
                  height={450}
                  src={blog.image}
                  width={300}
                />

                <div>
                  <h3 className='mt-3 text-xl font-semibold'>
                    {blog.title}
                  </h3>

                  <div className='mt-3 flex justify-between gap-x-5'>
                    <span className='font-medium'>- {blog.date}</span>
                    <Link
                      className='text-lg font-medium text-blue-700 transition hover:text-blue-900'
                      href={`/blog/${blog.title.replaceAll(' ', '-')}`}
                    >
                      Continue Reading &gt;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Container>

      <Container
        as='section'
        style={{
          background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
        }}
        variant='outer'
      >
        <Container className='mt-7 py-16'>
          <h1 className='h1bold'>
            Latest <span className='text-blue-700'>Insights</span>
          </h1>

          <div className='mt-7 grid gap-7 sm:grid-cols-2  lg:grid-cols-3'>
            {insight.map((blog) => (
              <article
                key={blog.title}
                className='grid w-full rounded-[10px] bg-white p-2'
              >
                <Image
                  alt='blog image'
                  className='w-full'
                  height={450}
                  src={blog.image}
                  width={300}
                />

                <div>
                  <h3 className='mt-3 text-xl font-semibold'>
                    {blog.title}
                  </h3>

                  <div className='mt-3 flex justify-between gap-x-5'>
                    <span className='font-medium'>- {blog.date}</span>
                    <Link
                      className='text-lg font-medium text-blue-700 transition hover:text-blue-900'
                      href={`/blog/${blog.title.replaceAll(' ', '-')}`}
                    >
                      Continue Reading &gt;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Container>

      <Container
        as='section'
        style={{
          background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
        }}
        variant='outer'
      >
        <Container className='mt-7 py-16'>
          <h1 className='h1bold'>
            Latest <span className='text-blue-700'>Videos</span>
          </h1>

          <p>
            The latest in security, access control, IT compliance, and
            other news.
          </p>

          <div className='mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2'>
            {videos.map((blog) => (
              <article
                key={blog.title}
                className='grid w-full rounded-[10px] bg-white p-2'
              >
                <Image
                  alt='blog image'
                  className='w-full'
                  height={450}
                  src={blog.image}
                  width={300}
                />

                <div>
                  <h3 className='mb-1 mt-3 text-xl font-semibold'>
                    {blog.title}
                  </h3>

                  <Link
                    className='text-lg font-medium text-blue-700 transition hover:text-blue-900'
                    href={`/blog/${blog.title.replaceAll(' ', '-')}`}
                  >
                    Continue Reading &gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Container>
    </main>
  );
}
