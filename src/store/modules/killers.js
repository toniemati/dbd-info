import axios from 'axios';

export default {
  state: {
    killers: []
  },
  getters: {
    getKillers: (state) => state.killers,
    getKillerByName: (state) => (payload) => state.killers.find(({ name }) => name.toLowerCase().replace(/\s|&/gi, '') === payload)
  },
  actions: {
    setKillers: async ({ commit }) => {
      try {
        const { data } = await axios.get('http://localhost:8080/killers');
        commit('setKillers', data);
      } catch (err) {
        console.log('killers error:', err);
      }
    }
  },
  mutations: {
    setKillers: (state, payload) => {
      state.killers = payload;
    }
  },
}