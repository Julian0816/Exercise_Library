import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BeginnerCard = () => {
  const [exercises, setExercises] = useState([])

  const apiKey = "u9+OyAQ0PbdbYEq81OwemA==d4pudHaaIIFJ5JLV"; // TODO fix the issue with the env variable not working

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/exercises?difficulty=beginner`, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);

        const exerciseData = response.data.map((exercise) => ({
          name: exercise.name,
          type: exercise.type,
          muscle: exercise.muscle,
          equipment: exercise.equipment,
          difficulty: exercise.difficulty,
          instructions: exercise.instructions,
        }));

        setExercises(exerciseData);
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  }, []);



  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        {exercises.map((exercise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div" color="green">
                  Level - {exercise.difficulty}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Name - {exercise.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Type - {exercise.type}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Muscle - {exercise.muscle}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Equipment - {exercise.equipment}
                </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Instructions</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {exercise.instructions}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default BeginnerCard;
