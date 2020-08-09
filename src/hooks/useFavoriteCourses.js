import { useState } from "react";
import _ from "lodash";

import { usePersistedState } from "./usePersistedState";

export const useFavoriteCourses = () => {
  const [listFavoriteCourses, setListFavoriteCourses] = usePersistedState(
    "@List/favoriteCourses",
    []
  );

  const [currentFilter, setCurrentFilter] = useState("all");

  const [
    listFilteredFavoriteCourses,
    setListFilteredFavoriteCourses,
  ] = useState(listFavoriteCourses);

  const filterListFavoriteCourses = (option, filterList = false) => {
    const list = filterList || listFavoriteCourses;

    const newList = list.filter((course) => {
      return course.enrollment_semester === option || option === "all";
    });
    setCurrentFilter(option);
    setListFilteredFavoriteCourses(newList);
  };

  const removeFavorite = (selectedCourses) => {
    const newListSelectedCourse = _.remove(listFavoriteCourses, (course) => {
      return !_.isEqual(course, selectedCourses);
    });

    setListFavoriteCourses(newListSelectedCourse);
    filterListFavoriteCourses(currentFilter, newListSelectedCourse);
  };

  const AddFavoriteCourse = (newCourses) => {
    const listNewCourses = [...newCourses, ...listFavoriteCourses];
    setListFavoriteCourses(listNewCourses);
    filterListFavoriteCourses(currentFilter, listNewCourses);
  };

  return {
    listFilteredFavoriteCourses,
    listFavoriteCourses,
    filterListFavoriteCourses,
    removeFavorite,
    AddFavoriteCourse,
    setListFavoriteCourses,
  };
};
