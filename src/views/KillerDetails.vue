<template>
  <div class="killerDetails">
    <div
      v-if="killer?.name"
      class="killerDetails__info"
    >
      <div class="killerDetails__leftSide">
        <img :src="killer.icon.preview_portrait" />

        <div class="killerDetails__leftSideInfo">
          <div class="killerDetails__item">
            <h3>Name</h3>
            <p>{{ killer.name }} ({{ killer.full_name }})</p>
          </div>

          <div class="killerDetails__item">
            <h3>Nationality</h3>
            <p>{{ killer.nationality }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Power</h3>
            <p>{{ killer.power }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Weapon</h3>
            <p>{{ killer.weapon }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Speed</h3>
            <p>{{ killer.speed }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Terror radius</h3>
            <p>{{ killer.terror_radius }}m</p>
          </div>

          <div class="killerDetails__item">
            <h3>Height</h3>
            <p>{{ killer.height }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Difficulty</h3>
            <p>{{ killer.difficulty }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>DLC</h3>
            <p>{{ killer.dlc }}</p>
          </div>

          <div class="killerDetails__item">
            <h3>Free</h3>
            <p>{{ killer.is_free ? 'Yes' : 'No' }}</p>
          </div>
        </div>
      </div>

      <div class="killerDetails__rightSide">
        <div class="killerDetails__item">
          <h3>Unique perks</h3>
          <div 
            class="killerDetails__item--perk" 
            v-for="(perk, i) in killer.perks" 
            :key="i"
            @click="handleKillerPerkClick(perk)"
          >
            {{ perk }}
          </div>
        </div>

        <div class="killerDetails__item">
          <h3>Overview</h3>
          <p>{{ killer.overview }}</p>
        </div>

        <div class="killerDetails__item">
          <h3>Lore</h3>
          <p>{{ killer.lore }}</p>
        </div>
      </div>
    </div>

    <div class="killerDetails__noFinded" v-else>
      <h1>no such a killer found</h1>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const store = useStore();

const killer = computed(() => store.getters.getKillerByName(route.params.name));

const handleKillerPerkClick = (perkName) => {
  router.push({ name: 'PerkDetails', params: {
      name: perkName.toLowerCase().replace('â', 'a')
    }
  });
}
</script>

<style scoped>
.killerDetails {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem;
}

.killerDetails__info {
  width: 60%;
  max-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow-y: scroll;
}

.killerDetails__leftSide {
  flex: 1;

  margin: 1rem;
}

.killerDetails__leftSideInfo {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin: 1rem;
}

.killerDetails__leftSide img {
  width: 100%;
}

.killerDetails__rightSide {
  flex: 2;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin: 1rem;
}

/* .killerDetails__item {} */

.killerDetails__item--perk {
  width: fit-content;
  cursor: pointer;
  margin-left: .5rem;
  color: lightblue;
}

.killerDetails__item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #aa2a23;

  margin-bottom: .33rem;
}

.killerDetails__item p {
  margin-left: .5rem;
}

.killerDetails__noFinded {
  margin: 10rem;
}
</style>