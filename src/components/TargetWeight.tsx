import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";

const TargetWeight = () => {
  return (
    <Box sx={{ marginTop: { sm: 2 }, marginRight: 1, marginLeft: { xs: 1} }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Target Weight"
        variant="outlined"
      />
    </Box>
  );
};

export default TargetWeight;
