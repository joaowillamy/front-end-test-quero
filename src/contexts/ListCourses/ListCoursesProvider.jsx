import React from "react";
import _ from "lodash";

import ListCoursesContext from "./ListCoursesContext";
import { useFilter } from "../../hooks/useFilter";
import { usePersistedState } from "../../hooks/usePersistedState";

const ListCoursesProvider = ({ children }) => {
  const filters = useFilter();
  const [listFavoriteCourses, setListFavoriteCourses] = usePersistedState(
    "@List/favoriteCourses",
    []
  );

  const removeFavorite = (selectedCourses) => {
    const newListSelectedCourse = _.remove(listFavoriteCourses, (course) => {
      return !_.isEqual(course, selectedCourses);
    });
    setListFavoriteCourses(newListSelectedCourse);
  };

  const value = {
    ...filters,
    listFavoriteCourses,
    setListFavoriteCourses,
    removeFavorite,
  };

  return (
    <ListCoursesContext.Provider value={value}>
      {children}
    </ListCoursesContext.Provider>
  );
};

export default ListCoursesProvider;
