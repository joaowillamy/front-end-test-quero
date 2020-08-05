import styled, { css } from "styled-components";

export const Text = styled.p`
  margin: 2px;

  ${({ theme, color, bold, size, inline, cut }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-weight: ${bold ? "900" : "normal"};
    font-size: ${size || "14px"};
    ${inline && "display: inline-block"};
    ${cut && "text-decoration: line-through;"}
  `};
`;
