<template>
  <Nav />

  <router-view />
</template>

<script setup>
import Nav from './components/Nav.vue';
import { useStore } from 'vuex';

const store = useStore();

store.dispatch('setPerks');
store.dispatch('setSurvivors');
store.dispatch('setKillers');

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;

  font-family: 'Montserrat', sans-serif;

  background-image: url('https://1920x1080hdwallpapers.com/image/201602/abstract/4797/surface-pink-shine-dark-sky.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;

  color: #efefef;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #00000055;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #efefef;
  cursor: pointer;
  border-radius: 3rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3a3a3a;
}
</style>
