

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
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Recipes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate("/selection");
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Our Selection" />
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