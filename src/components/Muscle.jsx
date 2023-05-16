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


export default function Muscle() {
  const navigate = useNavigate();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Muscle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding onClick={() => {navigate('/abdominals')}}>
                <ListItemButton>
                  <ListItemText primary="abdominals" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/abductors')}}>
                <ListItemButton component="a" >
                  <ListItemText primary="abductors" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/adductors')}}>
                <ListItemButton>
                  <ListItemText primary="adductors" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/biceps')}}>
                <ListItemButton component="a">
                  <ListItemText primary="biceps" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/calves')}}>
                <ListItemButton>
                  <ListItemText primary="calves" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/chest')}}>
                <ListItemButton component="a">
                  <ListItemText primary="chest" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate('/forearms')}}>
                <ListItemButton>
                  <ListItemText primary="forearms" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/glutes")}}>
                <ListItemButton component="a">
                  <ListItemText primary="glutes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/hamstrings")}}>
                <ListItemButton>
                  <ListItemText primary="hamstrings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/lats")}}>
                <ListItemButton component="a">
                  <ListItemText primary="lats" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/lower_back")}}>
                <ListItemButton component="a">
                  <ListItemText primary="lower_back" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/middle_back")}}>
                <ListItemButton component="a">
                  <ListItemText primary="middle_back" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/neck")}}>
                <ListItemButton component="a">
                  <ListItemText primary="neck" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/quadriceps")}}>
                <ListItemButton component="a">
                  <ListItemText primary="quadriceps" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/traps")}}>
                <ListItemButton component="a">
                  <ListItemText primary="traps" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {navigate("/ticeps");}}>
                <ListItemButton component="a">
                  <ListItemText primary="ticeps" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
