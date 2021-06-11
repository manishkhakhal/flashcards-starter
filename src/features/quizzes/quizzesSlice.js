import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from "../topics/topicsSlice";


const initialState = {
  quizzes: {}
};

const options = {
  name: 'quizzes',
  initialState:initialState,
  reducers: {
    addQuiz: (state, action) => {
      const {id} = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
}

export const addQuizForTopicId = (quiz) => {
    const { id, topicId } = quiz;
    return (dispatch) => {
      dispatch(quizzesSlice.actions.addQuiz(quiz));
      dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
    };
};

const quizzesSlice = createSlice(options);

export const {addQuiz} = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
