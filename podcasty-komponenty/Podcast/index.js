'use strict';

const podcastTemplate = Handlebars.compile(
  document.querySelector('#podcast-template').innerHTML
);

const renderPodcast = (podcast) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = podcastTemplate(podcast);

  const episodesListElm = helperELm.querySelector('.episodes-list');
  for (let i = 0; i < podcast.episodes.length; i += 1) {
    episodesListElm.appendChild(renderEpisode(podcast.episodes[i]));
  }

  return helperELm.children[0];
};
