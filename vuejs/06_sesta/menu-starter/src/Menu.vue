<template>
  <aside class="menu">
    <div class="menu__item">Domů</div>
    <div class="menu__item">Blog</div>
    <div class="menu__item">Kontakt</div>
  </aside>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return {
      active: "Domů"
    }
  }
  methods: {

  }
};
</script>

<style lang="css">
.menu {
  padding-top: 2rem;
  flex: 0 0 12rem;
  width: 12rem;
  height: 100%;
  background-color: deepskyblue;
  color: #555;
}

.menu__item {
  line-height: 2rem;
  padding: 0 2rem;
}
</style>
