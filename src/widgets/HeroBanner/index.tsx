import { FC } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = () => {
  return (
    <Paper elevation={4} sx={{ padding: 8, my: 1 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">We Helps You</Typography>
        <Typography variant="h4">Find Your Best Product</Typography>
      </Box>
    </Paper>
  );
};

export default HeroBanner;
