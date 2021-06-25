<template>
  <header>
    <div id="nav">
      <router-link to="/">
        <img class="logo" src="./assets/logo.png" alt="main page" />
      </router-link>
    </div>
  </header>
  <router-view />
</template>

<style lang="scss">
header {
  margin-bottom: 50px;
}

#nav {
  background-color: rgba(0, 87, 250, 0.514);
}

.logo {
  width: 30px;
  height: 30px;

  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
  padding: 5px;

  background-color: white;
}
</style>
