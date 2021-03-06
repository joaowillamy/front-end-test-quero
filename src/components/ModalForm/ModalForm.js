import React from "react";
import { Select, Checkbox, Range } from "@joaowillamy-test-quero/form";

import { Text, SortCourse } from "..";
import { getCities, getCourses } from "../../services/keeperDB";
import { useListCoursesContext } from "../../contexts";

import * as S from "./ModalForm.styled";

const ModalForm = () => {
  const {
    setInputCity,
    setInputCourse,
    setInputIsPresential,
    setInputIsDistance,
    setInputAmount,
    setInputSort,
  } = useListCoursesContext();

  return (
    <>
      <S.ModalCol>
        <Text size={"12px"} space={"5px"} bold>
          SELECIONE SUA CIDADE
        </Text>
        <Select
          labelField={"label"}
          valueField={"value"}
          options={getCities()}
          onChange={(value) => setInputCity(value[0].value)}
        />
      </S.ModalCol>
      <S.ModalCol>
        <Text size={"12px"} space={"5px"} bold>
          SELECIONE O CURSO DE SUA PREFERÊNCIA
        </Text>
        <Select
          labelField={"label"}
          valueField={"value"}
          options={getCourses()}
          onChange={(value) => setInputCourse(value[0].value)}
        />
      </S.ModalCol>

      <S.ModalCol>
        <Text size={"12px"} space={"5px"} bold>
          COMO VOCÊ QUER ESTUDAR?
        </Text>
        <br />
        <div style={{ width: "50%", display: "inline-block" }}>
          <Checkbox
            label={<>Presencial</>}
            name={"checkbox"}
            onChange={(data) => {
              setInputIsPresential(data.isChecked);
            }}
          />
        </div>
        <div style={{ width: "50%", display: "inline-block" }}>
          <Checkbox
            label={<>A distância</>}
            name={"checkbox"}
            onChange={(data) => {
              setInputIsDistance(data.isChecked);
            }}
          />
        </div>
      </S.ModalCol>
      <S.ModalCol>
        <Text size={"12px"} space={"5px"} bold>
          SELECIONE O CURSO DE SUA PREFERÊNCIA
        </Text>
        <Range
          value={10000}
          maxRange={10000}
          onChange={(data) => {
            setInputAmount(data);
          }}
        />
      </S.ModalCol>
      <S.ModalCol>
        <Text inline bold>
          Resultado:
        </Text>
      </S.ModalCol>
      <S.ModalCol>
        <SortCourse onChange={(data) => setInputSort(data)} />
      </S.ModalCol>
    </>
  );
};

export default ModalForm;
