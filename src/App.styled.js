import styled from "styled-components";
import { Menu } from "@joaowillamy-test-quero/core";

export const CostumMenu = styled(Menu)`
  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
  }
`;
