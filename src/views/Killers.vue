<template>
  <div class="killers">
    <h1>This is an killers page</h1>
    <pre>
      {{ killers[0] }}
    </pre>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const killers = computed(() => store.state.killers.killers);
</script>

