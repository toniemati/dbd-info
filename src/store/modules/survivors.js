import axios from 'axios';

export default {
  state: {
    survivors: []
  },
  getters: {
    getSurvivors: (state) => state.survivors
  },
  actions: {
    setSurvivors: async ({ commit }) => {
      const { data } = await axios.get('http://localhost:8080/survivors');
      commit('setSurvivors', data);
    }
  },
  mutations: {
    setSurvivors: (state, payload) => {
      state.survivors = payload;
    }
  },
}