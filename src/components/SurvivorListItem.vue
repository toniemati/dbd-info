<template>
  <div @click="handleClick" class="survivorListItem">
    <img :src="img" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const { name, img } = defineProps({ name: String, img: String });

const handleClick = () => {
  router.push({ name: 'SurvivorDetails', params: {
      name: name.toLowerCase().replace(/\s/gi, '')
    }
  });
}

</script>

<style scoped>
.survivorListItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  cursor: pointer;
  padding: 11%;
  border-radius: 5%;
  transition: all 0.3s ease-in-out;
}

.survivorListItem:hover {
  border: 1px solid #efefef;
}

.survivorListItem img {
  width: 100%;
}

.survivorListItem p {
  text-align: center;
}
</style>