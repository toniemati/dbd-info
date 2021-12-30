<template>
  <div class="killers">
    <div 
      v-if="killers.length"
      class="killers__list"
    >
      <KillerListItem 
        v-for="killer in killers"
        :key="killer._id"
        :name="killer.name"
        :img="killer.icon.portrait"
      />
    </div>
    
    <div class="killers__loading" v-else>
      loading data...
    </div>
  </div>
</template>

<script setup>
import KillerListItem from '../components/KillerListItem.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const killers = computed(() => store.getters.getKillers);
</script>

<style scoped>
.killers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.killers__list {
  max-height: 80vh;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;

  gap: 1rem;

  margin: 3rem 10rem;

  overflow-y: scroll;
}

.killers__loading {
  font-size: 2rem;
  font-weight: bold;
  margin: 5rem;
}
</style>

