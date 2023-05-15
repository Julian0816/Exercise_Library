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
import { Link } from "react-router-dom";


export default function Level() {
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
              <ListItem disablePadding>
                <Link to="/beginner">
                  <ListItemButton>
                    <ListItemText primary="Beginner" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/intermediate">
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Intermediate" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/expert">
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Expert" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
