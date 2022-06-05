import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

type PropTypes = {
  edit: () => void;
};
export const BarWeight = (props: PropTypes) => {
  return (
    <Grid item xs={6}>
      <Paper elevation={2} onClick={props.edit}>
        <Box sx={{ marginLeft: 1, paddingY: 1 }}>
          <Typography variant="subtitle2" gutterBottom component="div">
            Bar Weight
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            45lbs
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
