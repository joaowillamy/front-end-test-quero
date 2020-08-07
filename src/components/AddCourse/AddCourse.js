import React from "react";
import { Card, Icon } from "@joaowillamy-test-quero/core";

import { Text } from "../Text";

import * as S from "./AddCourse.styled";

const AddCourse = (props) => {
  return (
    <Card {...props}>
      <S.Row>
        <Icon.AddCircleOutline />
        <br />
        <Text bold size={"18px"}>
          Adicionar Bolsa
        </Text>
        <Text>
          Clique para adicionar bolsas de <br />
          cursos do seu interesse
        </Text>
      </S.Row>
    </Card>
  );
};

export default AddCourse;
