<template>
  <div class="perks">
    <input @input="handleInputChange" type="text" placeholder="perk/survivor/killer">

    <div 
      v-if="filteredPerks.length"
      class="perks__list"
    >
      <PerkListItem 
        v-for="perk in filteredPerks"
        :key="perk._id"
        :name="perk.perk_name"
        :img="perk.icon"
      />
    </div>
    
    <div class="perks__loading" v-else>
      loading data...
    </div>
  </div>
</template>

<script setup>
import PerkListItem from '../components/PerkListItem.vue';
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const perks = computed(() => store.getters.getEnPerks);
const filteredPerks = ref(perks.value);

//* Watching perks when fetch from api
watch(perks, (curr) => {
  filteredPerks.value = curr;
});

//* On input change filter perks by name
const handleInputChange = (e) => {
  const { target: { value } } = e;

  if (!value.length)
    return filteredPerks.value = perks.value;

  filteredPerks.value = perks.value.filter(({ perk_name, name }) => perk_name.match(new RegExp(value, 'i')) || name.match(new RegExp(value, 'i')));
}
</script>

<style scoped>
.perks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.perks input {
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

.perks input:focus {
  border-color: gray;
}

.perks__list {
  max-height: 70vh;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;

  gap: 1rem;

  margin: 2rem 10rem;

  overflow-y: scroll;
}

.perks__loading {
  font-size: 2rem;
  font-weight: bold;
  margin: 5rem;
}
</style>

