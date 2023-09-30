import { FC } from "react";
import { Typography, Grid } from "@mui/material";

import { FooterProps } from "./Types";

const Footer: FC<FooterProps> = () => {
  return (
    <Grid container justifyContent="space-between" p={2}>
      <Grid item>
        <Typography>@2023 porduct page</Typography>
      </Grid>
      <Grid item>
        <Typography>Help</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
