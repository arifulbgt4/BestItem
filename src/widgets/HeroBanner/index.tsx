import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";

import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = () => {
  return (
    <Stack direction="column" alignItems="center">
      <Box>
        <Typography variant="h3">We Helps You</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Find Your Best Product</Typography>
      </Box>
    </Stack>
  );
};

export default HeroBanner;
