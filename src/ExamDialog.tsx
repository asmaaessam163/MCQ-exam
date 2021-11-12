import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Question } from "./App";
import AppDialog from "./components/AppDialog";

interface ExamDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  question?: Question;
}

const ExamDialog = ({ open, setOpen, question, ...rest }: ExamDialogProps) => {
  console.log({ rest });
  return (
    <AppDialog
      open={open}
      setOpen={setOpen}
      fullWidth
      maxWidth="md"
      title="Sample Exam"
      action={<Button>Next</Button>}
    >
      <Typography variant="h5">{question?.name}</Typography>
      <RadioGroup name={question?.name}>
        {question?.answers.map((ans) => (
          <FormControlLabel
            value={ans.id}
            control={<Radio />}
            label={ans.name}
          />
        ))}
      </RadioGroup>
      <Typography variant="caption" color="GrayText">
        Keep in mind that if you refresh the page you will lose your answers
      </Typography>
    </AppDialog>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions,
  };
};

export default connect(null, mapStateToProps)(ExamDialog);
