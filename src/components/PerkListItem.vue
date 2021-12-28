<template>
  <div @click="handleClick" class="perkListItem">
    <img :src="img" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const { name, img } = defineProps({ name: String, img: String });

const handleClick = () => {
  router.push({ name: 'PerkDetails', params: {
    name: name.toLowerCase()
  } });
}

</script>

<style scoped>
.perkListItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 11%;
  border-radius: 5%;
  transition: all 0.3s ease-in-out;
}

.perkListItem:hover {
  border: 1px solid #efefef;
}

.perkListItem img {
  width: 100%;
}

.perkListItem p {
  text-align: center;
}
</style>