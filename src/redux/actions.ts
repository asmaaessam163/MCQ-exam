const submitQuestion = (question: any) => {
  return {
    type: "SUBMIT_QUESTION",
    payload: { questionId: question.id, answerId: question.answerId },
  };
};

const getQuestions = () => {
  return {
    type: "GET_QUESTIONS",
  };
};

const actions = {
  submitQuestion: "SUBMIT_QUESTION",
  getQuestions: "GET_QUESTIONS",
};

export { submitQuestion, getQuestions, actions };
