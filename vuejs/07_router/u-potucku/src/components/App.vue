<template>
  <div class="container">
    <router-link to="/home">Home</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/contact">Contact</router-link>

    <h1>Vue router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>
