import React from "react";
import { useState } from "react";

type PropTypes = {
  open: boolean;
};

const ModalComponent = (props: PropTypes) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <div>ModalComponent</div>;
};

export default ModalComponent;
