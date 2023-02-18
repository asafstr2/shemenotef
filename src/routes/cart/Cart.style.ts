import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  & .muibutton-containedprimary: {
    backgroundcolor: #53c4ac;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const subtext = styled.div`
  color: grey;
  margin-inline-end: 3%;
`;

export const button = styled.div`
  margin: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexText = styled.div`
  color: grey;
  display: flex;
  margin: auto;
  width: 76%;
  justify-content: space-between;
  margintop: 3%;
`;

export const flexAllign = styled.div`
  flex: 1;
  text-align: end;
`;
export const total = styled.div`
  flex: 1;
  text-align: end;
  font-size: 1.5rem;
`;
