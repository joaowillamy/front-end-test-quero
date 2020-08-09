import React, { useState } from "react";
import { Breadcrumb } from "@joaowillamy-test-quero/core";

import { useListCoursesContext } from "../../contexts";
import {
  AddCourse,
  FavoriteCourse,
  Text,
  ModalCourses,
} from "../../components";

import * as S from "./Home.styled";

const Home = () => {
  const {
    listFilteredFavoriteCourses,
    filterListFavoriteCourses,
  } = useListCoursesContext();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <S.Container>
        <Breadcrumb />
        <br />
        <Text size={"32px"} bold space={"10px"}>
          Bolsas favoritas
        </Text>
        <Text>
          Adicione os cursos e faculdades de seu interesse e receba atualizações
          com as melhores ofertas.
        </Text>

        <S.CostumButtonGroup
          options={[
            { label: "Todos os semestres", value: "all" },
            { label: "2º semestre de 2019", value: "2019.2" },
            { label: "1º semestre de 2020", value: "2020.1" },
          ]}
          onChange={filterListFavoriteCourses}
        />
      </S.Container>

      <S.ContainerList>
        <AddCourse onClick={toggleModal} />

        {listFilteredFavoriteCourses.map((favoriteCourse, index) => (
          <FavoriteCourse key={index} favoriteCourse={favoriteCourse} />
        ))}
      </S.ContainerList>

      <ModalCourses showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Home;
