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
  const { listFavoriteCourses } = useListCoursesContext();

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
            { label: "2º semestre de 2019", value: "second" },
            { label: "1º semestre de 2020", value: "first" },
          ]}
          onChange={(option) => console.log("option", option)}
        />
      </S.Container>

      <S.ContainerList>
        <AddCourse onClick={toggleModal} />

        {listFavoriteCourses.map((favoriteCourse, index) => (
          <FavoriteCourse key={index} favoriteCourse={favoriteCourse} />
        ))}
      </S.ContainerList>

      <ModalCourses showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Home;
