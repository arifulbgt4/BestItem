import { Grid } from "@mui/material";

import ProductDeatailsBanner from "src/widgets/ProductDetailsBanner";
import ContentDetailsCard from "src/widgets/ContentDetailsCard";

const ProdutPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ProductDeatailsBanner />
      </Grid>
      <Grid item xs={12}>
        <ContentDetailsCard />
      </Grid>
    </Grid>
  );
};

export default ProdutPage;
