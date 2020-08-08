import React from "react";
import { Icon } from "@joaowillamy-test-quero/core";

import { CustomCard, Text } from "../";

import * as S from "./AddCourse.styled";

const AddCourse = (props) => {
  return (
    <CustomCard {...props} center>
      <S.Row>
        <Icon.AddCircleOutline />
        <br />
        <Text bold size={"18px"} space={"10px"}>
          Adicionar Bolsa
        </Text>
        <Text>
          Clique para adicionar bolsas de <br />
          cursos do seu interesse
        </Text>
      </S.Row>
    </CustomCard>
  );
};

export default AddCourse;
