import React from "react";
import { Checkbox } from "@joaowillamy-test-quero/form";
import { Button } from "@joaowillamy-test-quero/core";

import { useNewFavorite } from "../../hooks/useNewFavorite";
import { currency } from "../../utils/format";
import { Text } from "..";

import * as S from "./ModalCourses.styled";

const ModalCourses = ({ toggleModal }) => {
  const {
    listCourse,
    selectedCourses,
    changeSelectCourse,
    addNewFavoriteCourse,
    isCourseSelected,
  } = useNewFavorite(toggleModal);

  return (
    <>
      <S.List>
        {listCourse.map((course) => (
          <article key={JSON.stringify(course)}>
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
                      <Text bold> {currency(course.price_with_discount)}</Text>
                    </S.ListTextDescription>
                  </S.ListWrapperText>
                </S.ListItem>
              }
              isSelected={isCourseSelected(course)}
              name={"checkbox"}
              value={course}
              onChange={changeSelectCourse}
            />
            <S.ListDivided />
          </article>
        ))}
      </S.List>

      <S.Actions>
        <Button variant="secondary" onClick={toggleModal}>
          Cancelar
        </Button>
        <Button
          disabled={!selectedCourses.length}
          onClick={addNewFavoriteCourse}
        >
          Adicionar bolsa(s)
        </Button>
      </S.Actions>
    </>
  );
};

export default ModalCourses;
