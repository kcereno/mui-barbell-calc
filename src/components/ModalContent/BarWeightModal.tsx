import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const BarWeightModal = () => {
  const [alignment, setAlignment] = useState("web");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Select Bar Weight
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default BarWeightModal;
