'use strict';

const contacts = [
  {
    name: 'Alice',
    phone: '3456789',
    adress: 'Vodičkova 41'
  },
  {
    name: 'Alena',
    phone: '34695789',
    adress: 'Vodičkova 42'
  },
  {
    name: 'Alexa',
    phone: '34623456',
    adress: 'Vodičkova 43',
  },
  {
    name: 'Alla',
    phone: '34345679',
    adress: 'Vodičkova 44',
  },
]
const contactTemplate = Handlebars.compile(
  document.querySelector('#contact-templ').innerHTML
);
const renderContact = function (id) {
  const tempElm = document.createElement('div');
  tempElm.innerHTML = contactTemplate(id);
  return tempElm.children[0];
};
const contactElm = document.querySelector('.contact-list');
for (let i = 0; i < contacts.length; i++) {
  let elm = renderContact(contacts[i]);
  contactElm.appendChild(elm);
}