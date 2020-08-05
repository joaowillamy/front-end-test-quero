import styled from "styled-components";
import { Menu } from "@joaowillamy-test-quero/core";
import media from "styled-media-query";

export const CostumMenu = styled(Menu)`
  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
  }
`;

export const Container = styled.div`
  width: 95%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;

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
