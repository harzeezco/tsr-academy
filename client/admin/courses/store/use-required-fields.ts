import { create } from 'zustand';

type ActiveCourseProps = {
  activeCourseOptions: number;
  setActiveCourseOptions: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export const useRequiredFields = create<ActiveCourseProps>()(
  (set) => ({
    activeCourseOptions: 1,
    setActiveCourseOptions: () => {
      set((prevState) => ({
        activeCourseOptions: prevState.activeCourseOptions + 1,
      }));
    },
  }),
);
