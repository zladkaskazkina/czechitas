'use strict';

const episodeTemplate = Handlebars.compile(
  document.querySelector('#episode-template').innerHTML
);

const renderEpisode = (episode) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = episodeTemplate(episode);
  return helperELm.children[0];
};
