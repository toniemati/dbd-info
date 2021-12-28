<template>
  <div class="perkDetails">
    <div v-if="perk?.name">
      <pre>
        {{ perk }}
      </pre>
    </div>

    <div v-else>
      <h1>no such a perk finded</h1>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, watch } from 'vue';

const route = useRoute();
const store = useStore();

const perk = computed(() => store.getters.getPerkByName(route.params.name))

watch(perk, (curr, prev) => console.table(curr));
</script>

<style scoped>

</style>