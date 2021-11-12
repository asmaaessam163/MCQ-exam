import axios from "axios";
import { actions } from "./actions";

const reducer = (initialState: any = [], action: any) => {
  switch (action.type) {
    case actions.getQuestions:
      return axios
        .get("http://localhost:8000/questions")
        .then(({ data }) => {
          return { ...initialState, questions: data };
        })
        .catch((err) => console.log(err));
  }
  return initialState;
};

export default reducer;
