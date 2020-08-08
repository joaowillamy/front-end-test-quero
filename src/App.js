import React from "react";
import { Header, Footer } from "@joaowillamy-test-quero/core";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Home from "./pages/Home";

import * as S from "./App.styled";

const App = () => {
  return (
    <ThemeProvider>
      <Header
        srcLogo={`${process.env.PUBLIC_URL}/images/logo-querobolsa.svg`}
      />

      <S.CostumMenu />

      <Home />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
