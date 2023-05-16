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


export default function Type() {
  const navigate = useNavigate();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding onClick={() => {navigate('/cardio')}}>
                <ListItemButton>
                  <ListItemText primary="Cardio" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/olympic_weightlifting")}}>
                <ListItemButton component="a" >
                  <ListItemText primary="olympic_weightlifting" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/plyometrics")}}>
                <ListItemButton component="a">
                  <ListItemText primary="plyometrics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/powerlifting")}}>
                <ListItemButton component="a">
                  <ListItemText primary="powerlifting" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/strength")}}>
                <ListItemButton component="a">
                  <ListItemText primary="strength" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/stretching")}}>
                <ListItemButton component="a">
                  <ListItemText primary="stretching" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/strongman")}}>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="strongman" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
