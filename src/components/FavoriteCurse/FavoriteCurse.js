import React from "react";
import { Card, Button } from "@joaowillamy-test-quero/core";

import { Divided } from "../Divided";
import { Text } from "../Text";
import * as S from "./FavoriteCurse.styled";

const FavoriteCurse = ({ favoriteCurse }) => {
  return (
    <Card>
      <img
        src={favoriteCurse.university.logo_url}
        alt={favoriteCurse.university.name}
      />

      <S.Row>
        <Text bold>{favoriteCurse.university.name}</Text>
        <Text color={"bluePrimary"} bold>
          {favoriteCurse.course.name}
        </Text>
        <Text bold>{favoriteCurse.university.score}</Text>
      </S.Row>

      <Divided />

      <S.Row>
        <Text bold>
          {favoriteCurse.course.kind}
          {" • "}
          {favoriteCurse.course.shift}
        </Text>

        <Text size={"12px"}>
          Início das aulas em: {favoriteCurse.start_date}
        </Text>
      </S.Row>

      <Divided />

      <S.Row>
        <Text bold size={"13px"}>
          Mensalidade com o Quero Bolsa:
        </Text>
        <Text size={"13px"} cut>
          {favoriteCurse.full_price}
        </Text>
        <span style={{ display: "inline", width: "100%" }}>
          <Text color={"green"} size={"18px"} bold inline>
            {favoriteCurse.price_with_discount}
          </Text>
          <Text inline> /mês</Text>
        </span>
      </S.Row>

      <span style={{ display: "inline", width: "100%" }}>
        <Button variant="secondary">Excluir</Button>
        <Button>Veja mais</Button>
      </span>
    </Card>
  );
};

export default FavoriteCurse;
