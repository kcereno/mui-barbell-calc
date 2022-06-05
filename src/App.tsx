import "./App.css";
import ApplicationBar from "./components/ApplicationBar";
import { useState } from "react";
import { Grid, Stack, Button, Box } from "@mui/material";
import { InputFields } from "./components/InputFields";
import ResultTable from "./components/ResultTable";
import { BarWeight } from "./components/BarWeight";
import TargetWeight from "./components/TargetWeight";
import AvailablePlates from "./components/AvailablePlates";
import Buttons from "./components/Buttons";

function App() {
  const [barWeight, setBarWeight] = useState<number | null>(null);

  return (
    <div className="App">
      <ApplicationBar />
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
        <Grid item xs={12}>
          <Buttons />
        </Grid>
        <Grid item xs={12}>
          <ResultTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
