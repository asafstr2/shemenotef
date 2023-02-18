import { Products } from "app/types/core";
import CardGrid from "components/cards/CardGrid";
import Carusale from "components/utils/Carusale";

const classes = {
  root: {
    width: "80%",
    margin: "auto",
  },
  carusale: {
    marginBottom: "80px",
  },
};

interface Props {
  productLoading: boolean;
  products: Products[];
}
function Homepage({ productLoading, products }: Props) {
  return (
    <div style={classes.root}>
      <div style={classes.carusale}>
        <Carusale products={products} productLoading={productLoading} />
      </div>
      <CardGrid products={products} productLoading={productLoading} />
    </div>
  );
}

export default Homepage;
