import { useState, useEffect } from "react";
import { dbjson } from "../services/db";

export const useFilter = () => {
  const [inputCity, setInputCity] = useState();
  const [inputCourse, setInputCourse] = useState();
  const [inputIsPresential, setInputIsPresential] = useState();
  const [inputIsDistance, setInputIsDistance] = useState();
  const [inputAmount, setInputAmount] = useState(1000);
  const [inputSort, setInputSort] = useState("asc");
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    setListCourse(dbjson.sort(policySort));
  }, []);

  useEffect(() => {
    filter();
  }, [
    inputCity,
    inputCourse,
    inputIsPresential,
    inputIsDistance,
    inputAmount,
    inputSort,
  ]);

  const filter = () => {
    const newListCourse = dbjson
      .filter((course) => {
        return (
          policyCity(course) &&
          policyCourse(course) &&
          policyHowStudy(course) &&
          policyAmount(course)
        );
      })
      .sort(policySort);

    setListCourse(newListCourse);
  };

  const policyCity = (course) => {
    if (!inputCity) return true;
    return course.campus.city == inputCity;
  };

  const policyCourse = (course) => {
    if (!inputCourse) return true;
    return course.course.name == inputCourse;
  };

  const policyHowStudy = (course) => {
    if (!inputIsPresential && !inputIsDistance) return true;

    if (inputIsPresential && inputIsDistance) return true;

    if (
      course.course.kind == "Presencial" &&
      inputIsPresential &&
      !inputIsDistance
    ) {
      return true;
    }

    if (course.course.kind == "EaD" && inputIsDistance && !inputIsPresential) {
      return true;
    }
  };

  const policyAmount = (course) => {
    return course.price_with_discount <= inputAmount;
  };

  const policySort = (courseA, courseB) => {
    if (inputSort === "asc") {
      if (courseA.university.name > courseB.university.name) return 1;
      if (courseA.university.name < courseB.university.name) return -1;
      return 0;
    }
    if (inputSort === "desc") {
      if (courseA.university.name > courseB.university.name) return -1;
      if (courseA.university.name < courseB.university.name) return 1;
      return 0;
    }
  };

  const clearAll = () => {
    setInputCity(null);
    setInputCourse(null);
    setInputIsPresential(null);
    setInputIsDistance(null);
    setInputAmount(1000);
    setInputSort("asc");
  };

  return {
    setInputCity,
    setInputCourse,
    setInputIsPresential,
    setInputIsDistance,
    setInputAmount,
    setInputSort,
    clearAll,
    listCourse,
  };
};
