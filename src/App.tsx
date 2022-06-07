import "./App.css";
import ApplicationBar from "./components/ApplicationBar";
import { useState } from "react";
import { Grid } from "@mui/material";
import ResultTable from "./components/ResultTable";
import { BarWeight } from "./components/BarWeight";
import TargetWeight from "./components/TargetWeight";
import AvailablePlates from "./components/AvailablePlates";
import Buttons from "./components/Buttons";
import { calculateLoadout } from "./functions/CalculatingFunctions";

export type LoadoutEntryType = {
  plate: number;
  amountPerSide: number;
};

export type LoadoutType = LoadoutEntryType[];

function App() {
  const [barWeight, setBarWeight] = useState<number>(45);
  const [targetWeight, setTargetWeight] = useState<number>(0);
  const [availablePlates, setAvailablePlates] = useState([
    2.5, 5, 10, 15, 25, 35, 45, 55,
  ]);

  const INITIAL_LOADOUT_VALUE = [] as LoadoutType;
  const [loadout, setLoadout] = useState<LoadoutType>(INITIAL_LOADOUT_VALUE);

  const handleSubmit = () => {
    console.log("SUBMIT");
    const loadout = calculateLoadout(barWeight, targetWeight, availablePlates);
    setLoadout(loadout);
  };
  const handleReset = () => {
    setTargetWeight(0);
    setAvailablePlates([2.5, 5, 10, 15, 25, 35, 45, 55]);
    setLoadout([]);
  };

  return (
    <div className="App">
      <ApplicationBar />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <BarWeight barWeight={barWeight} updateBarWeight={setBarWeight} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TargetWeight
            barWeight={barWeight}
            updateTargetWeight={setTargetWeight}
          />
        </Grid>
        <Grid item xs={12}>
          <AvailablePlates
            availablePlates={availablePlates}
            updatePlates={setAvailablePlates}
          />
        </Grid>
        <Grid item xs={12}>
          <Buttons submit={handleSubmit} reset={handleReset} />
        </Grid>
        <Grid item xs={12}>
          {loadout.length === 0 ? null : (
            <ResultTable barWeight={barWeight} loadout={loadout} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
