'use client';

import { CourseProvider } from '@admin/courses';
import { CourseFields } from '@admin/courses/create-course/course-fields/course-fields';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mt-6 bg-[#f9f9f9] p-5'>
      <CourseProvider>
        <CourseFields />

        {children}
      </CourseProvider>
    </div>
  );
}

export default Layout;
