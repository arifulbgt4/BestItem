import { FC } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  CardMedia,
  Card,
} from "@mui/material";

import { ContentDetailsBannerProps } from "./Types";

const ContentDeatailsBanner: FC<ContentDetailsBannerProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <Card>
      <CardMedia sx={{ height: "300px" }} image={image}>
        <Typography variant="h3">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </CardMedia>
    </Card>
  );
};

export default ContentDeatailsBanner;
