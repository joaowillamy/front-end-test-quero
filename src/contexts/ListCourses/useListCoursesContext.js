import { useContext } from "react";

import ListCoursesContext from "./ListCoursesContext";

const useListCoursesContext = () => useContext(ListCoursesContext);

export default useListCoursesContext;
