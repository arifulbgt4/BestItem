import { Grid } from "@mui/material";

import ContentDeatailsBanner from "src/widgets/ContentDetailsBanner";
import ProductDetailsCard from "src/widgets/ProductDetailsCard";

const ProdutPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContentDeatailsBanner
          title="Title"
          subtitle="subtitle"
          image="https://s40424.pcdn.co/in/wp-content/uploads/2022/04/March_How-to-become-Product-Manager-1.jpg.optimal.jpg"
        />
      </Grid>
      <Grid item xs={12}>
        <ProductDetailsCard />
      </Grid>
    </Grid>
  );
};

export default ProdutPage;
