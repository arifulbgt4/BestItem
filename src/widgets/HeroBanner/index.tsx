import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";

import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = ({ title, subtitle }) => {
  return (
    <Stack direction="column" alignItems="center">
      <Box>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
    </Stack>
  );
};

export default HeroBanner;
