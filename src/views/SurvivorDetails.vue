<template>
  <div class="survivorDetails">
    <div
      v-if="survivor?.name"
      class="survivorDetails__info"
    >
      <div class="survivorDetails__leftSide">
        <img :src="survivor.icon.preview_portrait" />

        <div class="survivorDetails__leftSideInfo">
          <div class="survivorDetails__item">
            <h3>Name</h3>
            <p>{{ survivor.name }}</p>
          </div>

          <div class="survivorDetails__item">
            <h3>Nationality</h3>
            <p>{{ survivor.nationality }}</p>
          </div>

          <div class="survivorDetails__item">
            <h3>Role</h3>
            <p>{{ survivor.role }}</p>
          </div>

          <div class="survivorDetails__item">
            <h3>Difficulty</h3>
            <p>{{ survivor.difficulty }}</p>
          </div>

          <div class="survivorDetails__item">
            <h3>DLC</h3>
            <p>{{ survivor.dlc }}</p>
          </div>

          <div class="survivorDetails__item">
            <h3>Free</h3>
            <p>{{ survivor.is_free ? 'Yes' : 'No' }}</p>
          </div>
        </div>
      </div>

      <div class="survivorDetails__rightSide">
        <div class="survivorDetails__item">
          <h3>Unique perks</h3>
          <div 
            class="survivorDetails__item--perk" 
            v-for="(perk, i) in survivor.perks" 
            :key="i"
            @click="handleSurvivorPerkClick(perk)"
          >
            {{ perk }}
          </div>
        </div>

        <div class="survivorDetails__item">
          <h3>Overview</h3>
          <p>{{ survivor.overview }}</p>
        </div>

        <div class="survivorDetails__item">
          <h3>Lore</h3>
          <p>{{ survivor.lore }}</p>
        </div>
      </div>
    </div>

    <div class="survivorDetails__noFinded" v-else>
      <h1>no such a survivor found</h1>
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

const survivor = computed(() => store.getters.getSurvivorByName(route.params.name));

const handleSurvivorPerkClick = (perkName) => {
  router.push({ name: 'PerkDetails', params: {
      name: perkName.toLowerCase().replace('â', 'a')
    }
  });
}
</script>

<style scoped>
.survivorDetails {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem;
}

.survivorDetails__info {
  width: 60%;
  max-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow-y: scroll;
}

.survivorDetails__leftSide {
  flex: 1;

  margin: 1rem;
}

.survivorDetails__leftSideInfo {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin: 1rem;
}

.survivorDetails__leftSide img {
  width: 100%;
}

.survivorDetails__rightSide {
  flex: 2;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin: 1rem;
}

/* .survivorDetails__item {} */

.survivorDetails__item--perk {
  width: fit-content;
  cursor: pointer;
  margin-left: .5rem;
  color: lightblue;
}

.survivorDetails__item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #aa2a23;

  margin-bottom: .33rem;
}

.survivorDetails__item p {
  margin-left: .5rem;
}

.survivorDetails__noFinded {
  margin: 10rem;
}

@media only screen and (max-width: 768px) {
  .survivorDetails {
    margin: 0;
  }

  .survivorDetails__info {
    width: 100%;
    max-height: 90vh;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 1rem 2rem;
  }

  .survivorDetails__leftSide {
    width: 100%;
    margin: 0 0 1rem;
  }

  .survivorDetails__leftSide img {
    padding: 3rem;
  }

  .survivorDetails__leftSideInfo {
    margin: 0;
  }

  .survivorDetails__rightSide {
    margin: 0;
  }
}
</style>