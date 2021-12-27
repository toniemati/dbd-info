import { createStore } from 'vuex';
import perks from './modules/perks';
import survivors from './modules/survivors';
import killers from './modules/killers';

export default createStore({
  modules: {
    perks,
    survivors,
    killers
  }
})
