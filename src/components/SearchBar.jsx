import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import List from "@mui/material/List";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Find your recipe</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav aria-label="secondary mailbox folders">
            <List>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <SearchIcon style={{ marginRight: "8px" }} />
                <InputBase
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{
                    color: "#000",
                    backgroundColor: "#f5f5f5",
                    padding: "6px 12px",
                    borderRadius: "4px",
                  }}
                />
              </div>{" "}
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SearchBar;
