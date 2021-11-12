import { useState } from "react";
import "./App.css";
import ExamDialog from "./ExamDialog";
import StudentPrompt from "./StudentPrompt";
import { connect } from "react-redux";
import { getQuestions } from "./redux/actions";
interface Answer {
  id: string;
  name: string;
  right: boolean;
}
export interface Question {
  id: string;
  name: string;
  answers: Answer[];
}
function App(props: { getQuestions: () => { type: string } }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleStartExam = () => {
    props.getQuestions();
    setOpen(true);
  };

  return (
    <div className="App">
      <StudentPrompt handleStartExam={handleStartExam} />
      {open && <ExamDialog open={open} setOpen={setOpen} />}
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
  };
};

export default connect(null, mapDispatchToProps)(App);
