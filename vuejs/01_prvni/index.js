console.log('funguji');
new Vue({
  el: "#app",
  data: {
    jmeno: 'Ajva',
    vaha: 50,
    barva: 'Zrzka',
    vek: 3,
    aktivity: ["behat", "stekat", "spat"],
    posledniakce: '...'
  },
  methods: {
    nakrmtrochu: function () {
      this.vaha++;
      this.posledniakce = 'nakrm trochu';
    },
    nakrmhodne: function () {
      this.vaha += 5;
      this.posledniakce = 'nakrm hodne';
    },
    vyvenci: function () {
      this.vaha--;
      this.posledniakce = 'vyvenci';
    },
    zastekej: function () {
      this.posledniakce = 'zastekej';
    },
  }
});