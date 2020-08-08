import styled from "styled-components";
import { ButtonGroup } from "@joaowillamy-test-quero/core";
import media from "styled-media-query";

export const CostumButtonGroup = styled(ButtonGroup)`
  margin: 20px auto;

  ${media.lessThan("medium")`
    button {
      width: 98%;
    }
  `};

  ${media.greaterThan("medium")`
    float: right;
  `}
`;

export const Container = styled.div`
  width: 95%;
  margin: 20px auto;
`;

export const ContainerList = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 2% auto;

  ${media.lessThan("medium")`
    width: 97%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  `};
`;
