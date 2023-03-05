import { Products } from "app/types/core";
import CardGrid from "components/cards/CardGrid";
import Carusale from "components/utils/Carusale";
import styled from "styled-components";

const RootContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const CarusaleContainer = styled.div`
  margin-bottom: 80px;
`;

interface Props {
  productLoading: boolean;
  products: Products[];
}

function Homepage({ productLoading, products }: Props) {
  return (
    <RootContainer>
      <CarusaleContainer>
        <Carusale products={products} productLoading={productLoading} />
      </CarusaleContainer>
      <CardGrid products={products} productLoading={productLoading} />
    </RootContainer>
  );
}

export default Homepage;
