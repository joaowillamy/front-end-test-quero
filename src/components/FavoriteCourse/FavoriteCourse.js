import React from "react";
import { Card, Button } from "@joaowillamy-test-quero/core";

import { Divided } from "../Divided";
import { Text } from "../Text";
import * as S from "./FavoriteCourse.styled";

const FavoriteCourse = ({ favoriteCourse }) => {
  return (
    <Card>
      <img
        src={favoriteCourse.university.logo_url}
        alt={favoriteCourse.university.name}
      />

      <S.Row>
        <Text bold>{favoriteCourse.university.name}</Text>
        <Text color={"bluePrimary"} bold>
          {favoriteCourse.course.name}
        </Text>
        <Text bold>{favoriteCourse.university.score}</Text>
      </S.Row>

      <Divided />

      <S.Row>
        <Text bold>
          {favoriteCourse.course.kind}
          {" • "}
          {favoriteCourse.course.shift}
        </Text>

        <Text size={"12px"}>
          Início das aulas em: {favoriteCourse.start_date}
        </Text>
      </S.Row>

      <Divided />

      <S.Row>
        <Text bold size={"13px"}>
          Mensalidade com o Quero Bolsa:
        </Text>
        <Text size={"13px"} cut>
          {favoriteCourse.full_price}
        </Text>
        <span style={{ display: "inline", width: "100%" }}>
          <Text color={"green"} size={"18px"} bold inline>
            {favoriteCourse.price_with_discount}
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

export default FavoriteCourse;
