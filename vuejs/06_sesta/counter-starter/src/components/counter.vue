<template>
  <div
    class="counter"
    v-bind:style="{ 'background-color': color }"
    v-on:click="pridej"
  >
    {{ counter }}
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      counter: 0,
    };
  },
  props: ["color", "max"],
  methods: {
    pridej() {
      if (this.max > this.counter) {
        this.counter++;
      } else {
        this.reset();
      }
    },
    reset(event) {
      event.currentTarget;
      this.counter = 0;
    },
  },
};
</script>

<style lang="css">
.counter {
  width: 10rem;
  height: 10rem;
  margin: 1rem 2rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  color: white;
  background-color: orange;
}
</style>
