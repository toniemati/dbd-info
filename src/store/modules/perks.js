import axios from 'axios';

export default {
  state: {
    perks: []
  },
  getters: {
    getPerks: (state) => state.perks,
    getPerkByName: (state) => (payload) => state.perks.find(({ perk_name }) => perk_name.toLowerCase().replace(/\s|&/gi, '') === payload)
  },
  actions: {
    setPerks: async ({ commit }) => {
      const { data } = await axios.get('http://localhost:8080/perks');
      commit('setPerks', data);
    }
  },
  mutations: {
    setPerks: (state, payload) => {
      state.perks = payload;
    }
  },
}