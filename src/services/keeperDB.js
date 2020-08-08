import { dbjson } from "./db";

export const getCities = () => {
  return [...new Set(dbjson.map((curse) => curse.campus.city))].map((city) => ({
    label: city,
    value: city,
  }));
};

export const getCourses = () => {
  return [...new Set(dbjson.map((curse) => curse.course.name))].map(
    (curse) => ({
      label: curse,
      value: curse,
    })
  );
};
