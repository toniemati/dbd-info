<template>
  <div class="about">
    <div class="about__content">
      <h1>About</h1>

      <div class="about__contentItem">
        <h3>api</h3>
        <p>
          <a href="https://dbd-api.herokuapp.com" target="_blank">https://dbd-api.herokuapp.com</a>
        </p>
      </div>

      <div class="about__contentItem">
        <h3>documentation</h3>
        <p>
          <a href="https://dearvoodoo.github.io/DBD-API" target="_blank">https://dearvoodoo.github.io/DBD-API</a>
        </p>
      </div>

      <div class="about__contentItem">
        <h3>made by</h3>
        <p>toni 🎃</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10rem;
}

.about__content {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 2rem;
}

.about__contentItem {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 0.33rem;
}

.about__contentItem h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #aa2a23;

  margin-right: 1rem;
}

.about__contentItem p a {
  color: lightblue;
  text-decoration: none;
}

.about__contentItem p a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .about {
    margin: 5rem .5rem;
  }  
}
</style>
