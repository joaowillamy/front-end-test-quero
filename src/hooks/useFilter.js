import { useState, useEffect } from "react";
import { dbjson } from "../services/db";
import {
  policyAmount,
  policySort,
  policyCity,
  policyCourse,
  policyHowStudy,
} from "../services/policy";

export const useFilter = () => {
  const [inputCity, setInputCity] = useState();
  const [inputCourse, setInputCourse] = useState();
  const [inputIsPresential, setInputIsPresential] = useState();
  const [inputIsDistance, setInputIsDistance] = useState();
  const [inputAmount, setInputAmount] = useState(10000);
  const [inputSort, setInputSort] = useState("asc");
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    setListCourse(
      dbjson.sort((courseA, courseB) => policySort(courseA, courseB, inputSort))
    );
  }, [inputSort]);

  // eslint-disable-next-line
  const filter = () => {
    const newListCourse = dbjson
      .filter((course) => {
        return (
          policyCity(course, inputCity) &&
          policyCourse(course, inputCourse) &&
          policyHowStudy(course, inputIsPresential, inputIsDistance) &&
          policyAmount(course, inputAmount)
        );
      })
      .sort((courseA, courseB) => policySort(courseA, courseB, inputSort));

    setListCourse(newListCourse);
  };

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

  const clearAll = () => {
    setInputCity(null);
    setInputCourse(null);
    setInputIsPresential(null);
    setInputIsDistance(null);
    setInputAmount(10000);
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
