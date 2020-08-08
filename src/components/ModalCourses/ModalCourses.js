import React from "react";

import ModalForm from "../ModalForm/ModalForm";
import ModalListCourses from "../ModalListCourses/ModalCourses";
import { Text } from "..";

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

        <ModalForm showModal={showModal} />

        <ModalListCourses />
      </S.CustomModal>
    </>
  );
};

export default ModalCourses;
