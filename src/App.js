import React from "react";
import { Header, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import { ListCoursesProvider } from "./contexts";
import { Home } from "./pages";

import * as S from "./App.styled";

const App = () => {
  return (
    <ThemeProvider>
      <Header
        srcLogo={`${process.env.PUBLIC_URL}/images/logo-querobolsa.svg`}
      />

      <S.CostumMenu />

      <ListCoursesProvider>
        <Home />
      </ListCoursesProvider>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
