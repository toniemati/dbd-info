<template>
  <div class="perkDetails">
    <div
      v-if="perk?.name"
      class="perkDetails__info"
    >
      <div class="perkDetails__infoImg">
        <img :src="perk.icon" />
      </div>

      <div class="perkDetails__infoContent">
        <div class="perkDetails__infoContentItem">
          <h3>For</h3>
          <p>{{ perk.role }}</p>
        </div>

        <div class="perkDetails__infoContentItem">
          <h3>Name</h3>
          <p>{{ perk.perk_name }}</p>
        </div>

        <div class="perkDetails__infoContentItem">
          <h3>From</h3>
          <p>{{ perk.name }}</p>
        </div>

        <div class="perkDetails__infoContentItem">
          <h3>Available for others on</h3>
          <p>{{ perk.teach_level  }} lvl</p>
        </div>

        <div class="perkDetails__infoContentItem">
          <h3>Description</h3>
          <p>{{ perk.description }}</p>
        </div>
      </div>
    </div>

    <div class="perkDetails__noFinded" v-else>
      <h1>no such a perk found</h1>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, watch } from 'vue';

const route = useRoute();
const store = useStore();

const perk = computed(() => store.getters.getPerkByName(route.params.name));
</script>

<style scoped>
.perkDetails {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem;
}

.perkDetails__info {
  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.perkDetails__infoImg {
  flex: 1;
}

.perkDetails__infoImg img {
  width: 100%;
}

.perkDetails__infoContent {
  flex: 2;

  display: flex;
  flex-direction: column;

  gap: 1rem;
}

/* .perkDetails__infoContentItem {} */

.perkDetails__infoContentItem h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #aa2a23;

  margin-bottom: .33rem;
}

/* .perkDetails__infoContentItem p {} */

.perkDetails__noFinded {
  margin: 10rem;
}
</style>