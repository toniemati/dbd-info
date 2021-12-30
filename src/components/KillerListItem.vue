<template>
  <div @click="handleClick" class="killerListItem">
    <img :src="img" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const { name, img } = defineProps({ name: String, img: String });

const handleClick = () => {
  router.push({ name: 'KillerDetails', params: {
      name: name.toLowerCase().replace(/\s/gi, '')
    }
  });
}

</script>

<style scoped>
.killerListItem {
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

.killerListItem:hover {
  border: 1px solid #efefef;
}

.killerListItem img {
  width: 100%;
}

.killerListItem p {
  text-align: center;
}
</style>