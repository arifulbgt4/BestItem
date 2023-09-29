import { FC } from "react";

import { FooterProps } from "./Types";
import { Stack, Typography } from "@mui/material";

const Footer: FC<FooterProps> = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      bgcolor="grey"
      alignItems="center"
      justifyContent="space-around"
      p={2}
      color="#b7aeae"
    >
      <Typography>@2023 www.product.com</Typography>
      <Typography>About us</Typography>
      <Typography>Support</Typography>
    </Stack>
  );
};

export default Footer;
