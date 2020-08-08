export const policyCity = (course, inputCity) => {
  if (!inputCity) return true;
  return course.campus.city === inputCity;
};

export const policyCourse = (course, inputCourse) => {
  if (!inputCourse) return true;
  return course.course.name === inputCourse;
};

export const policyHowStudy = (course, inputIsPresential, inputIsDistance) => {
  if (!inputIsPresential && !inputIsDistance) return true;

  if (inputIsPresential && inputIsDistance) return true;

  if (
    course.course.kind === "Presencial" &&
    inputIsPresential &&
    !inputIsDistance
  ) {
    return true;
  }

  if (course.course.kind === "EaD" && inputIsDistance && !inputIsPresential) {
    return true;
  }
};

export const policyAmount = (course, inputAmount) => {
  return course.price_with_discount <= inputAmount;
};

export const policySort = (courseA, courseB, inputSort) => {
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
