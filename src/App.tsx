import "./App.css";
import ApplicationBar from "./components/ApplicationBar";
import Grid from "@mui/material/Grid";
import { BarWeight } from "./components/BarWeight";
import AvailablePlates from "./components/AvailablePlates";
import TargetWeight from "./components/TargetWeight";
import { ActualWeight } from "./components/ActualWeight";

import { useState } from "react";
import { Box, Stack } from "@mui/material";
import WeightInputs from "./components/WeightInputs";
import { InputFields } from "./components/InputFields";

function App() {
  const [barWeight, setBarWeight] = useState<number | null>(null);
  return (
    <div className="App">
      <ApplicationBar />
      <Stack>
        <InputFields />

      </Stack>
    </div>
  );
}

export default App;
