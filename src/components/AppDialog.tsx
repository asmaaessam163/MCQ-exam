import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";

interface AppDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string | React.ReactElement;
  action: React.ReactElement;
}

const headerStyles: Record<string, CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
const AppDialog: React.FC<AppDialogProps & DialogProps> = ({
  open,
  setOpen,
  title,
  children,
  action,
  ...rest
}) => {
  const handleClose = () => () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose()} {...rest}>
      <Box sx={headerStyles.header}>
        <DialogTitle>
          <Typography variant="h4">{title}</Typography>
        </DialogTitle>
        <IconButton onClick={handleClose()}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{action}</DialogActions>
    </Dialog>
  );
};

export default AppDialog;
