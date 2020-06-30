new Vue({
  el: "#app",
  data: {
    list: ['clean the bathrom', 'call mamma',]
  },
  methods: {
    delete: function (index) {
      this.list.splice(index, 1);
    },
    addTask: function () {
      this.list.push('learn JS');
    }
  }
})