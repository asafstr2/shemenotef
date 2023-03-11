import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

interface Props {
  onClose?: (selectedValue: any) => void;
  selectedValue?: any;
  open?: boolean;
}

function Modal({ onClose, selectedValue, open = true }: Props) {
  const [openD, setOpenD] = useState(open);
  let navigate = useNavigate();
  let location = useLocation();
  console.log({ location });
  const handleClose = () => {
    setOpenD(false);
    onDismiss();
    onClose && onClose(selectedValue);
  };
  const onDismiss = () => {
    navigate(-1);
  };
  const modalStyle = {
    height: "80vh",
    padding: "30px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Dialog onClose={handleClose} open={openD} maxWidth="xl">
      <div style={modalStyle}>
        <Outlet />
      </div>
    </Dialog>
  );
}

export default Modal;
