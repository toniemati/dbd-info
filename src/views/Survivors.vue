<template>
  <div class="survivors">
    <div 
      v-if="filteredSurvivors.length"
      class="survivors__list"
    >
      <SurvivorListItem 
        v-for="survivor in filteredSurvivors"
        :key="survivor._id"
        :name="survivor.name"
        :img="survivor.icon.portrait"
      />
    </div>
    
    <div v-else>
      loading data...
    </div>
  </div>
</template>

<script setup>
import SurvivorListItem from '../components/SurvivorListItem.vue';
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const survivors = computed(() => store.state.survivors.survivors);
const filteredSurvivors = ref(survivors.value);

//* Watching survivors when fetch from api
watch(survivors, (curr, prev) => {
  filteredSurvivors.value = curr;
});

</script>

<style scoped>
.survivors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.survivors input {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  color: #efefef;
  
  background: none;
  outline: none;
  border: none;
  border: 2px solid #efefef;
  border-radius: 0.5rem;

  margin: 2rem 0;
  padding: 1rem;

  transition: all 0.1s ease-in-out;
}

.survivors input:focus {
  border-color: gray;
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
</style>

