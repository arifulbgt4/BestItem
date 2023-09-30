import { Grid } from "@mui/material";

import ContentDeatailsBanner from "src/widgets/ContentDetailsBanner";
import ProductDetailsCard from "src/widgets/ProductDetailsCard";

const ProdutPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContentDeatailsBanner />
      </Grid>
      <Grid item xs={12}>
        <ProductDetailsCard />
      </Grid>
    </Grid>
  );
};

export default ProdutPage;
