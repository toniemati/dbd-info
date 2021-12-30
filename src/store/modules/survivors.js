import axios from 'axios';

export default {
  state: {
    survivors: []
  },
  getters: {
    getSurvivors: (state) => state.survivors,
    getSurvivorByName: (state) => (payload) => state.survivors.find(({ name }) => name.toLowerCase().replace(/\s/gi, '') === payload)
  },
  actions: {
    setSurvivors: async ({ commit }) => {
      try {
        const { data } = await axios.get('http://localhost:8080/survivors');
        commit('setSurvivors', data);
      } catch (err) {
        console.log('survivors error:', err);
      }
    }
  },
  mutations: {
    setSurvivors: (state, payload) => {
      state.survivors = payload;
    }
  },
}