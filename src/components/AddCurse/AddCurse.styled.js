import styled from "styled-components";

export const Row = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  svg {
    width: 30%;
    color: ${({ theme }) => theme.colors.bluePrimary};
  }
`;
