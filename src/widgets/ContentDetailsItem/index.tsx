import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { ContentDetailsItemProps } from "./Types";

const ContentDetailsItem: FC<ContentDetailsItemProps> = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 240 }}
        image="https://media.istockphoto.com/id/1430084762/photo/high-end-golden-watches-shop.webp?b=1&s=612x612&w=0&k=20&c=m-WmzW_WiI9-h_nM9HJBYBaeTiBsJIZz_GLx0l7VwsA="
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Content card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentDetailsItem;
