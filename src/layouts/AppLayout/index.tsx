import React, { FC } from "react";
import { AppLaoutProps } from "./Types";
import { Grid } from "@mui/material";
import Header from "src/widgets/Header";
import Footer from "src/widgets/Footer";

const AppLayout: FC<AppLaoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AppLayout;
