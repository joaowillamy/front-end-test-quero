import React from "react";
import _ from "lodash";

import ListCoursesContext from "./ListCoursesContext";
import { useFilter } from "../../hooks/useFilter";
import { useFavoriteCourses } from "../../hooks/useFavoriteCourses";

const ListCoursesProvider = ({ children }) => {
  const filters = useFilter();
  const favoriteCourses = useFavoriteCourses();

  const value = {
    ...filters,
    ...favoriteCourses,
  };

  return (
    <ListCoursesContext.Provider value={value}>
      {children}
    </ListCoursesContext.Provider>
  );
};

export default ListCoursesProvider;
