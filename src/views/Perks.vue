<template>
  <div class="perks">
    <h1>This is an perks page</h1>

    <div 
      v-if="perks.length"
      class="perks__list"
    >
      <PerkListItem 
        v-for="perk in perks"
        :key="perk._id"
        :name="perk.perk_name"
        :img="perk.icon"
      />
    </div>
    
    <div v-else>
      no data
    </div>
  </div>
</template>

<script setup>
import PerkListItem from '../components/PerkListItem.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const perks = computed(() => store.state.perks.perks);

</script>

<style scoped>
.perks__list {
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  margin: 0 5rem;
}
</style>

