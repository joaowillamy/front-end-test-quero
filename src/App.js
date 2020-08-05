import React from "react";
import { Header, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import { dbjson } from "./db";
import FavoriteCurse from "./components/FavoriteCurse/FavoriteCurse";
import AddCurse from "./components/AddCurse/AddCurse";

import * as S from "./App.styled";

const App = () => {
  return (
    <ThemeProvider>
      <Header
        srcLogo={`${process.env.PUBLIC_URL}/images/logo-querobolsa.svg`}
      />
      <S.CostumMenu />

      <S.Container>
        <AddCurse />
        {dbjson.map((favoriteCurse, index) => (
          <FavoriteCurse key={index} favoriteCurse={favoriteCurse} />
        ))}
      </S.Container>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
