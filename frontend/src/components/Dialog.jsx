import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));



export default function CustomizedDialogs({children}) {
  const [open, setOpen] = React.useState(true);
const navigate= useNavigate()
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  const handleClose = () => {
      setOpen(false);
      navigate("/", { replace: true });
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
         onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
