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

const ContentDeatailsBanner: FC<ContentDetailsBannerProps> = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: "300px" }}
        image="https://s40424.pcdn.co/in/wp-content/uploads/2022/04/March_How-to-become-Product-Manager-1.jpg.optimal.jpg"
      >
        <Typography variant="h3">Products details banner</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          ipsam consectetur dolorum delectus, deserunt repellat molestiae dolor
          necessitatibus cum libero quam maxime tempora nostrum quasi quibusdam
          excepturi earum quas sed?
        </Typography>
      </CardMedia>
    </Card>
  );
};

export default ContentDeatailsBanner;
