'use client';

import { useRequiredFields } from '@admin/index';

import { courseRequireFields } from './data';

function CreateCourse() {
  const activeCourseFields = useRequiredFields(
    (state) => state.activeCourseOptions,
  );

  const filteredComponent = courseRequireFields.filter(
    (component) => component.id === activeCourseFields,
  );

  return (
    <section>
      {filteredComponent.map(({ Component, id }) => (
        <Component key={id} />
      ))}
    </section>
  );
}

export default CreateCourse;
