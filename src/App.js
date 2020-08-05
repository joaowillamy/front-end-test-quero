import React from "react";
import { Header, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import { dbjson } from "./db";
import FavoriteCourse from "./components/FavoriteCourse/FavoriteCourse";
import AddCourse from "./components/AddCourse/AddCourse";

import * as S from "./App.styled";

const App = () => {
  return (
    <ThemeProvider>
      <Header
        srcLogo={`${process.env.PUBLIC_URL}/images/logo-querobolsa.svg`}
      />
      <S.CostumMenu />

      <S.Container>
        <AddCourse />
        {dbjson.map((favoriteCourse, index) => (
          <FavoriteCourse key={index} favoriteCourse={favoriteCourse} />
        ))}
      </S.Container>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
