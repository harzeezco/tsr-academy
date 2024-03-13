import {
  CourseCurriculum,
  CourseInfoContent,
  CourseInfoOverview,
  CoursePricing,
} from '@admin/courses';
import { CourseInformation } from '@admin/courses/create-course/course-information';

type CourseRequiredProps = {
  Component: any;
  id: number;
};

export const courseRequireFields: CourseRequiredProps[] = [
  {
    id: 1,
    Component: CourseInformation,
  },
  {
    id: 2,
    Component: CourseInfoOverview,
  },
  {
    id: 3,
    Component: CourseInfoContent,
  },
  {
    id: 4,
    Component: CourseCurriculum,
  },
  {
    id: 5,
    Component: CoursePricing,
  },
];
