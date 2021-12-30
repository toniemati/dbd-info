import axios from 'axios';

export default {
  state: {
    perks: []
  },
  getters: {
    getPerks: (state) => state.perks,
    getEnPerks: (state) => state.perks.filter(({ lang }) => lang === 'en'),
    getPerkByName: (state) => (payload) => state.perks.find(({ perk_name }) => perk_name.toLowerCase().replace(/\s|&|'/giu, '').replace('â', 'a') === payload)
  },
  actions: {
    setPerks: async ({ commit }) => {
      try {
        const { data } = await axios.get('http://localhost:8080/perks');
        commit('setPerks', data);
      } catch (err) {
        console.log('perks error:', err);
      }
    }
  },
  mutations: {
    setPerks: (state, payload) => {
      state.perks = payload;
    }
  },
}