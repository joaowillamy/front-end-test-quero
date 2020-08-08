import React, { useEffect } from "react";
import { Select, Checkbox, Range } from "@joaowillamy-test-quero/form";

import { Text, SortCourse } from "..";

import { getCities, getCourses } from "../../services/keeperDB";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./ModalCourses.styled";

const ModalCourses = ({ showModal, toggleModal }) => {
  const {
    setInputCity,
    setInputCourse,
    setInputIsPresential,
    setInputIsDistance,
    setInputAmount,
    setInputSort,
    clearAll,
    listCourse,
  } = useFilter();

  useEffect(() => {
    if (!showModal) clearAll();
  }, [showModal]);

  return (
    <>
      <S.CustomModal isOpen={showModal} toggleModal={toggleModal}>
        <S.ModalCol>
          <Text size={"32px"} bold space={"10px"}>
            Adicionar bolsa
          </Text>
          <Text>Filtre e adicione as bolsas de seu interesse.</Text>
        </S.ModalCol>
        <br />
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
                setInputIsPresential(!data.isChecked);
              }}
            />
          </div>
          <div style={{ width: "50%", display: "inline-block" }}>
            <Checkbox
              label={<>A distância</>}
              name={"checkbox"}
              onChange={(data) => {
                setInputIsDistance(!data.isChecked);
              }}
            />
          </div>
        </S.ModalCol>
        <S.ModalCol>
          <Text size={"12px"} space={"5px"} bold>
            SELECIONE O CURSO DE SUA PREFERÊNCIA
          </Text>
          <Range
            value={1000}
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

        <S.List>
          {listCourse.map((course, index) => (
            <article key={index}>
              <S.ListDivided />
              <Checkbox
                label={
                  <S.ListItem>
                    <S.ListImage>
                      <img
                        src={course.university.logo_url}
                        alt={course.university.name}
                      />
                    </S.ListImage>
                    <S.ListWrapperText>
                      <div>
                        <Text color={"bluePrimary"} bold>
                          {course.course.name}
                        </Text>
                        <Text bold>{course.course.level}</Text>
                      </div>
                      <S.ListTextDescription>
                        <Text inline bold>
                          Bolsa de
                        </Text>{" "}
                        <Text inline bold color={"green"}>
                          {course.discount_percentage}%
                        </Text>
                        <Text bold>{course.price_with_discount}</Text>
                      </S.ListTextDescription>
                    </S.ListWrapperText>
                  </S.ListItem>
                }
                name={"checkbox"}
                value={{ a: 2, b: [1, 2] }}
                onChange={(data) => {
                  console.log(data);
                }}
              />
              <S.ListDivided />
            </article>
          ))}
        </S.List>
      </S.CustomModal>
    </>
  );
};

export default ModalCourses;
