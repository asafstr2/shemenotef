import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const RootContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #232f3e;
  color: #fff;
  padding: 32px 16px;
`;

export const Logo = styled.img`
  height: 36px;
  margin-bottom: 16px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Link = styled.a`
  color: #fff;
  margin: 0 16px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Disclaimer = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex-grow: 1;
`;
