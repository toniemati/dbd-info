<template>
  <div class="perkListItem">
    <img :src="img" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
const { name, img } = defineProps({ name: String, img: String });
</script>

<style scoped>
.perkListItem {
  margin: .5rem;
}

.perkListItem img {
  /* height: 100px; */
  width: 100%;
  object-fit: contain;
}

.perkListItem p {
  text-align: center;
}
</style>