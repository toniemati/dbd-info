<template>
  <div class="survivors">
    <h1>This is an survivors page</h1>
    <pre>
      {{ survivors[0] }}
    </pre>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const survivors = computed(() => store.state.survivors.survivors);
</script>

