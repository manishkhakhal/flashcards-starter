import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {
  }
}

const options = {
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    },
    addQuizIdForTopic: (state, action) => {
      const {topicId, quizId} = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
}

const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
