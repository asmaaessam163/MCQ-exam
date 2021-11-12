import "./App.css";
import StudentPrompt from "./StudentPrompt";

function App() {
  const handleStartExam = () => {
    //TODO call an action to get a random questions with variable "student name"
  };
  return (
    <div className="App">
      <StudentPrompt handleStartExam={handleStartExam} />
    </div>
  );
}

export default App;
