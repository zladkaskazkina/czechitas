'use strict';

const movieTemplate = Handlebars.compile(
  'Film {{title}} začíná v {{time}}, sál číslo {{hall}}'
);

const movie1 = {
  title: 'Casablanca',
  time: '19:30',
  hall: 7,
};
const movie2 = {
  title: 'Rampunzel',
  time: '16:30',
  hall: 5,
};
const movie3 = {
  title: 'Matrix',
  time: '18:30',
  hall: 6,
};
const cinemaTemplate = Handlebars.compile(
  `<span class="name">{{name}}</span><span class="address">{{adress}}</span>`
);

const cinema2 = {
  name: 'Bio Oko',
  adress: 'Františka Křížka 460/15',
};
const cinema3 = {
  name: 'Aero',
  adress: 'Biskupcova 31',
};
const cinemaElm = document.querySelector('.cinema__head');

cinemaElm.innerHTML = cinemaTemplate({
  name: 'Aero',
  adress: 'Biskupcova 31',
});
const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Casablanca',
      time: '18:30',
      hall: 7,
    },
    {
      title: 'Pán prstenů: Dvě věže',
      time: '17:45',
      hall: 4,
    },
    {
      title: 'Bla bla bla',
      time: '16:45',
      hall: 8,
    },
  ],
};

const movieNewTemplate = Handlebars.compile(
  document.querySelector('#movie-templ').innerHTML
);
const renderMovie = function (movie) {
  const tempElm = document.createElement('div');
  tempElm.innerHTML = movieNewTemplate(movie);
  return tempElm.children[0];

};


const movieElm = document.querySelector('.cinema__movies');
for (let i = 0; i < cinema1.movies.length; i++) {
  let elm = renderMovie(cinema1.movies[i]);
  movieElm.appendChild(elm);
}
