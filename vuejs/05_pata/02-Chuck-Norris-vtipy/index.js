'use strict';
/*
Na adrese https://api.chucknorris.io/ najdeš
popis API, které umí vracet náhodné vtipy
o Chucku Norrisovi.

V podstatě stačí položit dotaz na následující
API endpoint:

created() {
	fetch('https://api.chucknorris.io/jokes/random')
		.then(response => response.json())
		.then (data => this.vtip = data.data.value)
		.catch(error => console.warn(error));
}

Vrátí se objekt v takovémto formátu:
{
	"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
	"id" : "lyyuxeoxtwqd-oibq6_zqa",
	"url" : ""
	"value" : "Chuck Norris invented his own type of karate. It's called Chuck-Will-Kill."
}

1) Vytvoř Vue aplikaci, která bude zobrazovat náhodné vtipy.

2) První vtip se načte hned při spuštění aplikace v lifecycle
metodě create.

3) Do aplikace přidej tlačítko "Jiný vtip", po jehož kliknutí se
z API načte jiný náhodný vtip.

*/

new Vue({
	el: '#app',
	data: {
		vtip: ""
	},
	methods: {
		change() {
			console.log('change');
			fetch('https://api.chucknorris.io/jokes/random')
				.then(response => response.json())
				.then(data => this.vtip = data.value)
				.catch(error => console.warn(error));
		}
	},
	created() {
		console.log('created');
		fetch('https://api.chucknorris.io/jokes/random')
			.then(response => response.json())
			.then(data => this.vtip = data.value)
			.catch(error => console.warn(error));
	}
});
