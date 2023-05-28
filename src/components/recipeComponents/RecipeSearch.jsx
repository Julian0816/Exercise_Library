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
import { recipeService } from "../../services/recipeService";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const RecipeSearch = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {

const apiKey = import.meta.env.VITE_API_KEY;


    const fetchData = async () => {
      const headers = {
        "X-Api-Key": apiKey,
      };
      const recipeData = await recipeService(searchQuery, headers);
      setRecipes(recipeData);
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const StyledTitle = styled(Typography)`
    color: #536b78;
    font-weight: bold;
    text-align: center;
  `;

  const StyledCard = styled(Card)`
    background-color: #cccccc;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const accordionStyle = {
    backgroundColor: "#999999",
    color: "#FFFFFF",
  };

  const StyledCardContent = styled(CardContent)`
    text-align: left;
  `;

  return (
    <Box sx={{ minWidth: 275 }}>
      <TextField
        label="Search for recipes"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: 2 }}
      />

      <Grid container spacing={2}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard variant="outlined">
              <StyledCardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  <StyledTitle>{recipe.title}</StyledTitle>
                </Typography>
                <Accordion style={accordionStyle}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Ingredients</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{recipe.ingredients}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion style={accordionStyle}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Servings</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{recipe.servings}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion style={accordionStyle}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Instructions</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{recipe.instructions}</Typography>
                  </AccordionDetails>
                </Accordion>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecipeSearch;
