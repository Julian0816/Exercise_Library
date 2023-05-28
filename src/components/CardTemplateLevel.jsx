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

import { styled } from "@mui/system";
import { levelService } from "../services/levelService";
import Loader from "../Loader";

const CardTemplateLevel = (props) => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Service
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const exerciseData = await levelService(props.level);
      setExercises(exerciseData);
      setIsLoading(false);
    };

    fetchData();
  }, [props.level]);

  //Styled Components
  const StyledTitle = styled(Typography)`
    color: #536b78;
    font-weight: bold;
    text-align: center;
  `;

  const StyledCard = styled(Card)`
    background-color: #cee5f2;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const accordionStyle = {
    backgroundColor: "#ACCBE1", // Purple color
    color: "#FFFFFF", // White text color for better contrast
  };

  const StyledCardContent = styled(CardContent)`
    text-align: left;
  `;

  const spanStyle = {
    fontWeight: "bold",
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {exercises.map((exercise, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard variant="outlined">
                <StyledCardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    <StyledTitle>
                      <span style={spanStyle}>Level</span> -{" "}
                      {exercise.difficulty}
                    </StyledTitle>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    <span style={spanStyle}>Name</span> - {exercise.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    <span style={spanStyle}>Type</span> - {exercise.type}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    <span style={spanStyle}>Muscle</span> - {exercise.muscle}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    <span style={spanStyle}>Equipment</span> -{" "}
                    {exercise.equipment}
                  </Typography>
                  <Accordion style={accordionStyle}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Instructions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{exercise.instructions}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardTemplateLevel;
