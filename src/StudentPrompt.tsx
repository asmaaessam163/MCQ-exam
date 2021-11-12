import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AppDialog from "./components/AppDialog";

const StudentPrompt = ({
  handleStartExam,
}: {
  handleStartExam: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleSubmit = () => {
    handleStartExam();
    setOpen(false);
  };

  return (
    <AppDialog
      open={open}
      setOpen={setOpen}
      title="Student Information"
      fullWidth
      maxWidth="sm"
      action={
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      }
    >
      <form>
        <Box display="flex" flexDirection="column">
          <TextField name="" label="Student name" required />
          <Typography variant="caption">
            Note: Once you submit you will be enrolled and the exam will start
          </Typography>
        </Box>
      </form>
    </AppDialog>
  );
};

export default StudentPrompt;
