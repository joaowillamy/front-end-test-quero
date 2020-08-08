import styled from "styled-components";
import media from "styled-media-query";
import { Modal } from "@joaowillamy-test-quero/core";

export const CustomModal = styled(Modal)`
  padding: 20px;
`;

export const ModalCol = styled.div`
  width: 100%;
  margin-top: 20px;

  ${media.greaterThan("medium")`
    width: 50%;
    padding: 10px;
    display: inline-block;
    margin-top: 10px;
  `}
`;

export const List = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const ListImage = styled.div`
  width: 50%;

  ${media.greaterThan("medium")`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  img {
    max-height: 30px;
    max-width: 100px;
  }
`;

export const ListWrapperText = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 20px;

  ${media.greaterThan("medium")`
    flex-direction: row;
    padding-left: 0;
  `};
`;

export const ListTextDescription = styled.div`
  margin-top: 10px;
  text-align: left;

  ${media.greaterThan("medium")`
      text-align: right;
      margin-top: 0;
    `};

  p {
    ${media.greaterThan("medium")`
        text-align: right;
      `};
  }
`;

export const ListDivided = styled.div`
  border-bottom: 1px solid rgb(204, 204, 204);

  :first-child {
    border-bottom: 2px solid rgb(204, 204, 204);
  }

  :last-child {
    border-bottom: 2px solid rgb(204, 204, 204);
  }
`;
