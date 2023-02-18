import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useNavigate, Outlet } from "react-router-dom";

interface Props {
  onClose?: (selectedValue: any) => void;
  selectedValue?: any;
  open?: boolean;
}

function Modal({ onClose, selectedValue, open = true }: Props) {
  const [openD, setOpenD] = useState(open);
  let navigate = useNavigate();

  const handleClose = () => {
    setOpenD(false);
    onDismiss();
    onClose && onClose(selectedValue);
  };
  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <Dialog onClose={handleClose} open={openD} style={{ zIndex: 1000 }}>
      <Outlet />
    </Dialog>
  );
}

export default Modal;
