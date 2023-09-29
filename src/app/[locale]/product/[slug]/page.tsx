import { Grid } from "@mui/material";

import ProductDeatailsBanner from "src/widgets/ProductDetailsBanner";
import ProductDetailsCard from "src/widgets/ProductDetailsCard";

const ProdutPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ProductDeatailsBanner />
      </Grid>
      <Grid item xs={12}>
        <ProductDetailsCard />
      </Grid>
    </Grid>
  );
};

export default ProdutPage;
