import { FC } from "react";

import { FooterProps } from "./Types";
import { Stack, Typography, Grid } from "@mui/material";
import palette from "src/theme/palette";
import ThemeContextProvider from "src/theme";

const Footer: FC<FooterProps> = () => {
  return (
    <Grid container bgcolor="#1A2027" p={2}>
      <Grid item md={6} lg={6} xl={6} xs={12}>
        <Typography textAlign="center">@2023 porduct page</Typography>
      </Grid>
      <Grid item md={6} lg={6} xl={6} xs={12}>
        <Typography textAlign="center">Help</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
