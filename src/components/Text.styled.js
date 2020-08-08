import styled, { css } from "styled-components";

export const Text = styled.p`
  ${({ theme, color, bold, size, inline, cut, space }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-weight: ${bold ? "900" : "normal"};
    font-size: ${size || "14px"};
    ${inline && "display: inline-block"};
    ${cut && "text-decoration: line-through;"}
    margin: ${space || "2px"} 0;
  `};
`;
