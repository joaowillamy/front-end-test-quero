import React from "react";
import { Button } from "@joaowillamy-test-quero/core";
import { Rate } from "@joaowillamy-test-quero/form";

import { Divided, Text, CustomCard } from "../";

import * as S from "./FavoriteCourse.styled";

const FavoriteCourse = ({ favoriteCourse }) => {
  return (
    <CustomCard>
      <img
        src={favoriteCourse.university.logo_url}
        alt={favoriteCourse.university.name}
      />

      <S.Row>
        <Text bold>{favoriteCourse.university.name}</Text>
        <Text space={"10px"} color={"bluePrimary"} bold>
          {favoriteCourse.course.name}
        </Text>
        <div>
          <S.Score>{favoriteCourse.university.score}</S.Score>
          <Rate value={favoriteCourse.university.score} />
        </div>
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
          R$ {favoriteCourse.full_price}
        </Text>
        <span style={{ display: "inline", width: "100%" }}>
          <Text color={"green"} size={"18px"} bold inline>
            R$ {favoriteCourse.price_with_discount}
          </Text>
          <Text inline> /mês</Text>
        </span>
      </S.Row>

      <span style={{ display: "inline", width: "100%" }}>
        <Button variant="secondary">Excluir</Button>
        <Button>Veja mais</Button>
      </span>
    </CustomCard>
  );
};

export default FavoriteCourse;
