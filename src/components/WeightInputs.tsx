import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BarWeight } from "./BarWeight";
import TargetWeight from "./TargetWeight";

const WeightInputs = () => {
  return (
    <>
      <Paper elevation={5}>
        <Box sx={{ margin: 1 }}>
          <Grid container>
            <BarWeight />
            <TargetWeight />
            <Grid item xs={12}>
              <h1>Available Plate</h1>
            </Grid>
            <Grid item xs={12}>
              <h1>Submit Button</h1>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default WeightInputs;
