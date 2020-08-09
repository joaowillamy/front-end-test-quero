import React, { useEffect } from "react";

import ModalForm from "../ModalForm/ModalForm";
import ModalListCourses from "../ModalListCourses/ModalCourses";
import { Text } from "..";
import { useListCoursesContext } from "../../contexts";

import * as S from "./ModalCourses.styled";

const ModalCourses = ({ showModal, toggleModal }) => {
  const { clearAll: clearAllFilters, filter } = useListCoursesContext();

  useEffect(() => {
    if (!showModal) clearAllFilters();
    filter();
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

        <ModalForm />

        <ModalListCourses toggleModal={toggleModal} />
      </S.CustomModal>
    </>
  );
};

export default ModalCourses;
