'use strict';

const podcast1 = {
  title: 'Ranní avantgarda',
  episodes: [
    {
      num: 126,
      title: 'Robot, který snědl koblihu',
      guest: 'Radovan Holátko',
    },
    {
      num: 127,
      title: 'Hledání plyšového Yettiho',
      guest: 'Vojtěch Ryba'
    },
    {
      num: 128,
      title: 'Moderní hrachová polévka',
      guest: 'Kamila Štancová'
    },
    {
      num: 129,
      title: 'Poloautomatické zrcadlo',
      guest: 'Janka Janovská'
    },
    {
      num: 130,
      title: 'Máčené hlavy parlamentu',
      guest: 'Jonáš Daněk'
    },
    {
      num: 131,
      title: 'Služby na hraně přívěsu',
      guest: 'Tereza Křivánková'
    },
    {
      num: 132,
      title: 'Klasifikace sněžných klokanů',
      guest: 'Josef Stix'
    },
    {
      num: 133,
      title: 'Rybolov v Oceánu bouří',
      guest: 'Ludmila Gajová'
    },
  ],
};

const podcast2 = {
  title: 'Večerní klídek',
  episodes: [
    {
      num: 12,
      title: 'Ukolébavka',
      guest: 'Kryštov Pírko',
    },
    {
      num: 13,
      title: 'Pohádka o Lyšce Bystroušce',
      guest: 'Janek Lešení'
    },
  ],
};

const app = document.querySelector('#app');
app.appendChild(renderPodcast(podcast1));
app.appendChild(renderPodcast(podcast2));