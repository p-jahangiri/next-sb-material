import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface ActionCardProps {
  img?: string;
  textCard?: string;
  backgroundColor?: string;
}
const ActionCard: React.FC<ActionCardProps> = ({
  img,
  textCard,
  backgroundColor,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        minWidth: 230,
        maxHeight: 900,
        marginRight: "4rem",
        backgroundColor: backgroundColor,
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: "100%", height: "150px" }}
          component="img"
          height="auto"
          image={img ? img : "https://source.unsplash.com/random"}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            dir="rtl"
            marginTop="10px"
          >
            {textCard
              ? textCard
              : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionCard;
