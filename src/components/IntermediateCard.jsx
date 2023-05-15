import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Exercise Name
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Type of exercise
      </Typography>
      <Typography variant="body2">Musclse name</Typography>
      <Typography variant="body2">Equipment</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Instructions</Button>
    </CardActions>
  </React.Fragment>
);

export default function IntermediateCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

// TODO Fetch data and display like on the beginnerCard