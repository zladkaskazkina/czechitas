<template>
  <div class="strom">
    {{druh}}
    <br />
    {{typ}}
    <br />
    {{vyska}}
  </div>
</template>

<script>
export default {
  name: "Strom",
  props: ["druh", "typ", "vyska"]
};
</script>

<style lang="css" scoped>
.strom {
  width: 50px;
  padding: 10px;
  margin: 10px;
  border: 3px solid yellow;
}
</style>