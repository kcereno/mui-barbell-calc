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
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <ModalComponent
        showing={showModal}
        closeModal={handleCloseModal}
        type={selectedMenu}
      />
      <ApplicationBar />
      <Container>
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          <BarWeight edit={handleShowModal} />
          <AvailablePlates />
          <TargetWeight />
          <ActualWeight />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
