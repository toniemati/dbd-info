<template>
  <div class="perks">
    <h1>This is an perks page</h1>
    <pre>
      {{ perks[0] }}
    </pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const perks = computed(() => store.state.perks.perks);

</script>

