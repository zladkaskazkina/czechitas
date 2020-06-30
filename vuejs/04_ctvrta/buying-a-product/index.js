'use strict';

new Vue({
  el: '#app',
  data: {
    amount: 1,
    click: false,
    btnText: 'Koupit'
  },

  methods: {
    handleClick() {
      this.click = true;
      this.btnText = this.amount + 'kusů v košíku';

    }
  }
});

// const handleClick = () => {
//   const btnElm = document.querySelector('#buy-btn');
//   const quantityElm = document.querySelector('#quantity');
//   const quantity = Number(quantityElm.value);
//   btnElm.textContent = quantity + ' kusů v košíku';
//   btnElm.classList.add('btn--done');
// }

