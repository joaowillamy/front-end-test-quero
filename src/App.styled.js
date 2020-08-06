import styled from "styled-components";
import { Menu, ButtonGroup } from "@joaowillamy-test-quero/core";
import media from "styled-media-query";

export const CostumMenu = styled(Menu)`
  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
  }
`;

export const CostumButtonGroup = styled(ButtonGroup)`
  margin: 20px auto;

  ${media.lessThan("medium")`
    button {
      width: 94%;
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
  margin: 0 auto 20px auto;

  ${media.lessThan("medium")`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  `};

  div {
    background-color: #fff;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 15px;

    ${media.greaterThan("medium")`
      width: 30%;
    `};

    ${media.greaterThan("large")`
      width: 23%;
    `}
  }
`;
