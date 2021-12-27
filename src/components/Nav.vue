<template>
  <div class="nav">
    <router-link to="/">home</router-link>
    <br/>
    <router-link to="/perks">perks</router-link>
    <br/>
    <router-link to="/survivors">survivors</router-link>
    <br/>
    <router-link to="/killers">killers</router-link>
    <br/>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.nav {
  display: flex;

  justify-content: space-evenly;
}
</style>