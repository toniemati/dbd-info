<template>
  <div class="survivors">
    <div 
      v-if="survivors.length"
      class="survivors__list"
    >
      <SurvivorListItem 
        v-for="survivor in survivors"
        :key="survivor._id"
        :name="survivor.name"
        :img="survivor.icon.portrait"
      />
    </div>
    
    <div class="survivors__loading" v-else>
      loading data...
    </div>
  </div>
</template>

<script setup>
import SurvivorListItem from '../components/SurvivorListItem.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const survivors = computed(() => store.getters.getSurvivors);
</script>

<style scoped>
.survivors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.survivors__list {
  max-height: 80vh;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;

  gap: 1rem;

  margin: 3rem 10rem;

  overflow-y: scroll;
}

.survivors__loading {
  font-size: 2rem;
  font-weight: bold;
  margin: 5rem;
}
</style>

