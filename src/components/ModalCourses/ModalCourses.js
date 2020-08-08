import React from "react";
import { Select, Checkbox, Range } from "@joaowillamy-test-quero/form";

import { Text, SortCourse } from "..";
import { dbjson } from "../../services/db";

import * as S from "./ModalCourses.styled";

const ModalCourses = ({ showModal, toggleModal }) => {
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
            labelField={"name"}
            valueField={"id"}
            options={[
              {
                id: "ea304469-3d25-4b33-967b-9740ab7e910f",
                name: "Madge Casper",
              },
              {
                id: "ea30446asd9-3d25-4b33-967b-9740ab7e910f",
                name: "Joao",
              },
            ]}
            onChange={(values) => console.log(values)}
          />
        </S.ModalCol>
        <S.ModalCol>
          <Text size={"12px"} space={"5px"} bold>
            SELECIONE O CURSO DE SUA PREFERÊNCIA
          </Text>
          <Select
            labelField={"name"}
            valueField={"id"}
            options={[
              {
                id: "ea304469-3d25-4b33-967b-9740ab7e910f",
                name: "Madge Casper",
              },
              {
                id: "ea30446asd9-3d25-4b33-967b-9740ab7e910f",
                name: "Joao",
              },
            ]}
            onChange={(values) => console.log(values)}
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
              value={{ a: 2, b: [1, 2] }}
              onChange={(data) => {
                console.log(data);
              }}
            />
          </div>
          <div style={{ width: "50%", display: "inline-block" }}>
            <Checkbox
              label={<>A distância</>}
              name={"checkbox"}
              value={{ a: 2, b: [1, 2] }}
              onChange={(data) => {
                console.log(data);
              }}
            />
          </div>
        </S.ModalCol>
        <S.ModalCol>
          <Text size={"12px"} space={"5px"} bold>
            SELECIONE O CURSO DE SUA PREFERÊNCIA
          </Text>
          <Range
            value={1}
            onChange={(data) => {
              console.log(data);
            }}
          />
        </S.ModalCol>
        <S.ModalCol>
          <Text inline bold>
            Resultado:
          </Text>
        </S.ModalCol>
        <S.ModalCol>
          <SortCourse />
        </S.ModalCol>
        <div style={{ width: "100%" }}>
          {dbjson.map((course, index) => (
            <article key={index}>
              <S.ListDivided />
              <Checkbox
                label={
                  <>
                    <S.List>
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
                    </S.List>
                  </>
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
        </div>
      </S.CustomModal>
    </>
  );
};

export default ModalCourses;
