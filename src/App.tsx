import "./App.css";
import ApplicationBar from "./components/ApplicationBar";
import Grid from "@mui/material/Grid";
import { BarWeight } from "./components/BarWeight";
import AvailablePlates from "./components/AvailablePlates";
import { Container } from "@mui/material";
import TargetWeight from "./components/TargetWeight";
import { ActualWeight } from "./components/ActualWeight";
import ModalComponent from "./components/ModalComponent";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <ModalComponent open={showModal} />
      <ApplicationBar />
      <Container>
        <Grid container spacing={1} sx={{ paddingTop: 1 }}>
          <BarWeight />
          <AvailablePlates />
          <TargetWeight />
          <ActualWeight />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
