import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "components/cards/Card";
import Loader from "components/utils/Loader";
import { Products } from "app/types/core";
interface Props {
  products: Products[];
  productLoading: boolean;
}
export default function ResponsiveGrid({ products, productLoading }: Props) {
  if (productLoading) return <Loader />;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {products?.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product._id}>
            <Card key={product._id} {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
