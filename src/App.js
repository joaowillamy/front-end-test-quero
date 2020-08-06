import React from "react";
import { Header, Breadcrumb, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import { dbjson } from "./db";
import { AddCourse, FavoriteCourse, Text } from "./components";

import * as S from "./App.styled";

const App = () => {
  return (
    <ThemeProvider>
      <Header
        srcLogo={`${process.env.PUBLIC_URL}/images/logo-querobolsa.svg`}
      />

      <S.CostumMenu />

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
        <AddCourse />
        {dbjson.map((favoriteCourse, index) => (
          <FavoriteCourse key={index} favoriteCourse={favoriteCourse} />
        ))}
      </S.ContainerList>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
