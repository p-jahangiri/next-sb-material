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
  color?: string;
  marginRight?: number;
  height?: number;
  width?: number;
  onClick?: () => void;
}
const ActionCard: React.FC<ActionCardProps> = ({
  img,
  textCard,
  backgroundColor,
  color,
  marginRight,
  height,
  width,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: width? width: 230,
        maxHeight: 900,
        marginRight: marginRight,
        backgroundColor: backgroundColor,
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: "100%" }}
          component="img"
          height={height ? height : 150}
          image={img ? img : "https://source.unsplash.com/random"}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="body2"
            color={color ? color : "text.secondary"}
            dir="rtl"
            marginTop="10px"
          >
            {textCard ? textCard : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionCard;
