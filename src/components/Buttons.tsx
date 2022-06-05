import { Box, Button } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
      <Button variant="contained" size="large">
        Calculate
      </Button>
      <Button
        sx={{ marginLeft: 1 }}
        variant="contained"
        size="large"
        color="error"
      >
        Reset
      </Button>
    </Box>
  );
};

export default Buttons;
