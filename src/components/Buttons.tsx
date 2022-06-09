import { Box, Button } from "@mui/material";
import React from "react";

type PropTypes = {
  submit: () => void;
  reset: () => void;
};

const Buttons = ({ submit, reset }: PropTypes) => {
  return (
    <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
      <Button variant="contained" size="large" onClick={submit}>
        Calculate
      </Button>
      <Button
        sx={{ marginLeft: 1 }}
        variant="contained"
        size="large"
        color="error"
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Buttons;
