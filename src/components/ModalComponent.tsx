import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BarWeightModal from "./ModalContent/BarWeightModal";

type PropTypes = {
  showing: boolean;
  closeModal: () => void;
  type: string | null;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = (props: PropTypes) => {
  return (
    <Modal
      open={props.showing}
      onClose={props.closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <BarWeightModal />
      </Box>
    </Modal>
  );
};

export default ModalComponent;
