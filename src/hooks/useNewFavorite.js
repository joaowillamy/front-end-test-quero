import { useState } from "react";
import _ from "lodash";

import { useListCoursesContext } from "../contexts";

export const useNewFavorite = (toggleModal) => {
  const { listCourse, AddFavoriteCourse } = useListCoursesContext();

  const [selectedCourses, setSelectedCourses] = useState([]);

  const changeSelectCourse = (data) => {
    if (data.isChecked) {
      addCourse(data.value);
    } else {
      removeCourse(data.value);
    }
  };

  const addCourse = (courseSelected) => {
    setSelectedCourses([...selectedCourses, courseSelected]);
  };

  const removeCourse = (courseSelected) => {
    const newListSelectedCourse = _.remove(selectedCourses, (course) => {
      return !_.isEqual(course, courseSelected);
    });
    setSelectedCourses(newListSelectedCourse);
  };

  const addNewFavoriteCourse = () => {
    toggleModal && toggleModal();
    AddFavoriteCourse(selectedCourses);
  };

  const isCourseSelected = (course) => _.some(selectedCourses, course);

  return {
    addNewFavoriteCourse,
    changeSelectCourse,
    isCourseSelected,
    selectedCourses,
    listCourse,
  };
};
