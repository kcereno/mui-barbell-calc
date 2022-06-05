import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AvailablePlates from "./AvailablePlates";
import { BarWeight } from "./BarWeight";
import TargetWeight from "./TargetWeight";

export const InputFields = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <BarWeight />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TargetWeight />
      </Grid>
      <Grid item xs={12}>
        <AvailablePlates />
      </Grid>
    </Grid>
  );
};
