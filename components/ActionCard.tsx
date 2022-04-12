import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

 export interface ActionCardProps {
  img: string;
  textCard: string;
}
export const ActionCard:React.FC<ActionCardProps> = ({ img, textCard }) => {
  return (
    <Card  sx={{ maxWidth: 250,minWidth:230, maxHeight: 900}} >
     <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" dir="rtl" marginTop="10px">
            {textCard}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
