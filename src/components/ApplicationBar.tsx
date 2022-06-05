import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Typography from "@mui/material/Typography";

const ApplicationBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="p"
 
          >
            Barbell Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ApplicationBar;
