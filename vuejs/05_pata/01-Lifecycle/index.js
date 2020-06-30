'use strict';
/*
Vyzkoušej si metody životního cyklu Vue aplikace:
- created
- mounted
- updated
*/

new Vue({
	el: '#app',
	data: {
		jmeno: 'Petr'
	},
	methods: {
		zmenJmeno() {
			this.jmeno = 'Karel';
		}
	},
	created() {
		console.log('was sreated');
	}
});
