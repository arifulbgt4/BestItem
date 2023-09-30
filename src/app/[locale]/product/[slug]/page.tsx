import { Grid } from "@mui/material";

import ProductDeatailsBanner from "src/widgets/ProductDetailsBanner";
import ContentDetailsItem from "src/widgets/ContentDetailsItem";

const ProdutPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ProductDeatailsBanner />
      </Grid>
      <Grid item xs={12}>
        <ContentDetailsItem />
      </Grid>
    </Grid>
  );
};

export default ProdutPage;
