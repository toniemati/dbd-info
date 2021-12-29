<template>
  <div class="nav">
    <router-link to="/">home</router-link>
    <router-link to="/perks">perks</router-link>
    <router-link to="/survivors">survivors</router-link>
    <router-link to="/killers">killers</router-link>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  background: hsl(0, 0%, 5%);

  padding: 1rem;
}

.nav a {
  font-size: 1.1rem;

  text-decoration: none;
  color: white;

  transition: all 200ms ease-in-out;
}

.nav a:hover {
  color: darkgray;
}

.nav a.router-link-exact-active {
  color: #aa2a23;
  font-weight: bold;
}
</style>