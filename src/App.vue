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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  width: 100vw;
  min-height: 100vh;
  background-image: url('https://1920x1080hdwallpapers.com/image/201602/abstract/4797/surface-pink-shine-dark-sky.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
}
</style>
