import React, { useCallback, useState } from "react";
import { Icon } from "@joaowillamy-test-quero/core";

import { Text } from "..";

import * as S from "./SortCourse.styled";

const SortCourse = ({ onChange }) => {
  const SORT_TYPE = {
    ASC: "asc",
    DESC: "desc",
  };

  const [currentSort, setCurrentSort] = useState(SORT_TYPE.ASC);
  const onChangeCallback = useCallback(onChange);

  const sortOnChange = () => {
    const newCurrentSort =
      SORT_TYPE.DESC === currentSort ? SORT_TYPE.ASC : SORT_TYPE.DESC;

    setCurrentSort(newCurrentSort);
    onChangeCallback && onChangeCallback(newCurrentSort);
  };

  return (
    <S.SortCourse onClick={sortOnChange}>
      <Text inline bold>
        Ordenar por
      </Text>{" "}
      <div>
        <Text inline bold color={"bluePrimary"}>
          Nome da Faculdade
        </Text>
        {currentSort === SORT_TYPE.DESC ? (
          <Icon.ArrowUpward />
        ) : (
          <Icon.ArrowDownward />
        )}
      </div>
    </S.SortCourse>
  );
};

export default SortCourse;
