import styled from "styled-components";

export const FlexEndWrapper = styled.div`
  margin-inline-start: auto;
`;

export const FlexInnerContainer = styled.div`
  width: 97%;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;

export const StickyNavBar = styled.div<{
  masterTheme: { palette: { primary: { main?: string; dark: string } } };
}>`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  justify-content: space-around;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ masterTheme }) => masterTheme.palette.primary.main};
`;
