<template>
  <div class="les">
    <button v-on:click="pridejStrom">Pridej strom</button>
    <MujStrom
      v-for="(drevina, index) in stromy"
      :druh="drevina.rodStromu"
      :typ="drevina.druhStromu"
      :vyska="drevina.vyskaStromu"
      :key="index"
    />
  </div>
</template>

<script>
import Strom from "./strom.vue";
export default {
  name: "Les",
  data() {
    return {
      //mame pole s daty pro stromy
      //pak toto pole projdeme v template pomoci cyklu
      stromy: [
        {
          rodStromu: "modrin",
          druhStromu: "opadavy",
          vyskaStromu: 8
        },
        {
          rodStromu: "modrin",
          druhStromu: "opadavy",
          vyskaStromu: 6
        },
        {
          rodStromu: "modrin",
          druhStromu: "opadavy",
          vyskaStromu: 7
        }
      ]
    };
  },
  methods: {
    pridejStrom() {
      this.stromy.push({
        rodStromu: "smrk",
        druhStromu: "ztepily",
        vyskaStromu: 6
      });
    }
  },
  components: {
    MujStrom: Strom
  }
};
</script>

<style lang="css" scoped>
.les {
  border: 3px solid green;
  display: flex;
}
</style>