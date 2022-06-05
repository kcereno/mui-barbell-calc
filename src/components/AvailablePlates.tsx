import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const AvailablePlates = () => {
  return (
    <Grid item xs={6}>
      <Paper elevation={2}>
        <Box sx={{ marginLeft: 1, paddingY: 1 }}>
          <Typography variant="subtitle2" gutterBottom component="div">
            Available Plates
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            45lbs
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AvailablePlates;
