import styled from "styled-components";
import media from "styled-media-query";
import { Card } from "@joaowillamy-test-quero/core";

export const CustomCard = styled(Card)`
  background-color: #fff;
  padding-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px 0;
  min-height: 300px;

  ${media.greaterThan("medium")`
  
  width: 30%;
  
  margin-bottom: 2%;
  margin-left: 2%;
`};

  ${media.greaterThan("large")`
  width: 22.5%;
`}
`;
