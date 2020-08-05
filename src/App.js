import React from "react";
import { Header, Breadcrumb, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import { dbjson } from "./db";
import { AddCourse, FavoriteCourse } from "./components";

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
