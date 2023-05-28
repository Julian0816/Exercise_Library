

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();


    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Recipes (Our Selection)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/meat");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Meat" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/chicken");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Chicken" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/fish");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Fish" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/vegetarian");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Vegetarian" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/vegan");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Vegan" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/search");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Search yours" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default Recipes;