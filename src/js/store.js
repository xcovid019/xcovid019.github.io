
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    questionAnswer : [],
  },
  getters: {
    answer({ state }) {
      return state.questionAnswer;
    }
  },
  actions: {
    addAnswer({ state }, answer) {
      console.log('Jawaban Anda... ', state.questionAnswer)
      state.questionAnswer = [...state.questionAnswer, answer];
    },
  },
})
export default store;
