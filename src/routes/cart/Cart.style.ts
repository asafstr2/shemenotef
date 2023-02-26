import styled from "styled-components";


export const RootWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  & .MuiButton-containedPrimary {
    background-color: #53c4ac;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const Subtext = styled.h5`
  color: grey;
  margin-inline-end: 3%;
`;

export const FlexText = styled.div`
  color: grey;
  display: flex;
  margin: auto;
  width: 76%;
  justify-content: space-between;
  margin-top: 3%;
`;

export const FlexAlign = styled.span`
  flex: 1;
  text-align: end;
`;

export const Total = styled.span`
  flex: 1;
  text-align: end;
  font-size: 1.5rem;
`;