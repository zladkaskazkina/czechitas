<template>
  <div class="container">
    <h1>Já jsem Vue aplikace</h1>
    <MujCount
      v-for="(prop, index) in counts"
      :color="prop.color"
      :max="prop.max"
      :key="index"
    />
  </div>
</template>

<script>
import Count from "./components/counter.vue";
export default {
  name: "App",
  data() {
    return {
      counts: [
        {
          color: "blue",
          max: "25",
        },
        {
          color: "yellow",
          max: "15",
        },
        {
          color: "green",
          max: "35",
        },
      ],
    };
  },
  components: {
    MujCount: Count,
  },
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
