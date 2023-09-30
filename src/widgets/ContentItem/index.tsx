import { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { ContentListProps } from "./Types";

const ContentItem: FC<ContentListProps> = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 340 }}
        image="https://media.istockphoto.com/id/1286329777/photo/preparing-self-care-package-seasonal-gift-box-with-plastic-free-zero-waste-cosmetics-products.jpg?s=1024x1024&w=is&k=20&c=vO-evVCJMAxTHJ5As5_s6iVWoiDzENGoQQY8YqmmASA="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Content Item
        </Typography>
        <Typography variant="body2" color="text.secondary">
          content details
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentItem;
