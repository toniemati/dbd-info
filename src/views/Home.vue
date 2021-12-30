<template>
  <div class="home">
    <div class="home__content">
      <h1>Dead by daylight - info</h1>
      <p>perks / survivors / killers details</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10rem;
}

.home__content {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 2rem;
}

@media only screen and (max-width: 768px) {
  .home {
    margin: 5rem .5rem;
  }  
}
</style>
