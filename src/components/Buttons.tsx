import { Box, Button } from "@mui/material";
import React from "react";

type PropTypes = {
  submit: () => void;
  reset: () => void;
};

const Buttons = (props: PropTypes) => {
  return (
    <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
      <Button variant="contained" size="large" onClick={props.submit}>
        Calculate
      </Button>
      <Button
        sx={{ marginLeft: 1 }}
        variant="contained"
        size="large"
        color="error"
        onClick={props.reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Buttons;
