import React from "react";
import { Checkbox } from "@joaowillamy-test-quero/form";

import { Text } from "..";
import { useListCoursesContext } from "../../contexts";

import * as S from "./ModalCourses.styled";

const ModalCourses = () => {
  const { listCourse } = useListCoursesContext();

  return (
    <>
      <S.List>
        {listCourse.map((course, index) => (
          <article key={index}>
            <S.ListDivided />
            <Checkbox
              label={
                <S.ListItem>
                  <S.ListImage>
                    <img
                      src={course.university.logo_url}
                      alt={course.university.name}
                    />
                  </S.ListImage>
                  <S.ListWrapperText>
                    <div>
                      <Text color={"bluePrimary"} bold>
                        {course.course.name}
                      </Text>
                      <Text bold>{course.course.level}</Text>
                    </div>
                    <S.ListTextDescription>
                      <Text inline bold>
                        Bolsa de
                      </Text>{" "}
                      <Text inline bold color={"green"}>
                        {course.discount_percentage}%
                      </Text>
                      <Text bold>R$ {course.price_with_discount}</Text>
                    </S.ListTextDescription>
                  </S.ListWrapperText>
                </S.ListItem>
              }
              name={"checkbox"}
              value={{ a: 2, b: [1, 2] }}
              onChange={(data) => {
                console.log(data);
              }}
            />
            <S.ListDivided />
          </article>
        ))}
      </S.List>
    </>
  );
};

export default ModalCourses;
