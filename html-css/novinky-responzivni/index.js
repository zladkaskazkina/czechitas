const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const styleElm = document.querySelector('.news');
styleElm.style.backgroundColor = 'white';
styleElm.style.maxWidth = '60rem';

const hOneElm = document.querySelector('h1');
hOneElm.className = 'news__title';
hOneElm.textContent = 'Aktualni novinky';

const firstNews = document.querySelector('#zprava1');
firstNews.className = 'post post--main';

const picture = document.querySelector('.picture3');
picture.src = 'img/zprava3-novy.jpg';
