import React from "react";

import ListCoursesContext from "./ListCoursesContext";
import { useFilter } from "../../hooks/useFilter";
import { usePersistedState } from "../../hooks/usePersistedState";

const ListCoursesProvider = ({ children }) => {
  const filters = useFilter();
  const [listFavoriteCourses, setListFavoriteCourses] = usePersistedState(
    "@List/favoriteCourses",
    []
  );

  const value = {
    ...filters,
    listFavoriteCourses,
    setListFavoriteCourses,
  };

  return (
    <ListCoursesContext.Provider value={value}>
      {children}
    </ListCoursesContext.Provider>
  );
};

export default ListCoursesProvider;
