import axios from 'axios';

export default {
  state: {
    killers: []
  },
  getters: {
    getKillers: (state) => state.killers
  },
  actions: {
    setKillers: async ({ commit }) => {
      const { data } = await axios.get('http://localhost:8080/killers');
      commit('setKillers', data);
    }
  },
  mutations: {
    setKillers: (state, payload) => {
      state.killers = payload;
    }
  },
}