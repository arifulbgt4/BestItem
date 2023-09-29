import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = () => {
  return (
    <Grid container p={8} justifyContent="center">
      <Grid item>
        <Typography variant="h3">We Helps You</Typography>
        <Typography variant="h4">Find Your Best Product</Typography>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
