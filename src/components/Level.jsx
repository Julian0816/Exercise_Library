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
import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";


export default function Level() {
  const navigate = useNavigate();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fitness Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding onClick={() => {navigate('/beginner')}}>
                  <ListItemButton >
                    <ListItemText primary="Beginner" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/intermediate')}}>
                  <ListItemButton component="a">
                    <ListItemText primary="Intermediate" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/expert')}}>
                  <ListItemButton component="a">
                    <ListItemText primary="Expert" />
                  </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
