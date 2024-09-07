import _ from 'lodash';
import './styles.css';
// import Icon from './icon.png';

const listOfCodes = {
  AF09202024: 'apphia2024',
  SDA09182024: 'teph2024',
};

function loadingPage() {
  const loadingPage = document.createElement('div');
  loadingPage.setAttribute('id', 'loading-page');

  const loadingText = document.createElement('p');
  loadingText.textContent = 'Loading...';
  loadingPage.appendChild(loadingText);

  // await new Promise((resolve) => setTimeout(() => {
  //   setTimeout(() => {
  //     loadingPage.style.opacity = 0;
  //     loadingPage.style.display = 'none';
  //   }, 1000);
  //   setTimeout(() => {
  //     error.style.opacity = 1;
  //     error.style.display = 'flex';
  //   }, 1000);
  //   resolve();
  // }, 3000));
}

function renderGreeting(inputValue) {
  const code = inputValue;
  const greeting = listOfCodes[code];

  // import the module and corresponding css dynamically
  import(`./greetings/${greeting}.js`)
    .then((module) => {
      const { renderGreetingCard } = module.default();
      const card = document.createElement('div');
      card.className = 'card';
      const greetingCard = renderGreetingCard();
      card.appendChild(greetingCard);
      document.body.appendChild(card);
    })
    .catch((error) => {
      console.error('Error importing module:', error);
    });
}

// welcome page with form to enter code
const welcomeDiv = document.createElement('div');
welcomeDiv.className = 'welcome';

const form = document.createElement('form');
form.className = 'form';
form.onsubmit = (event) => {
  event.preventDefault();
};

const inputDiv = document.createElement('div');
inputDiv.className = 'input-div';
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter code here';
input.addEventListener('input', () => {
  document.querySelector('p').style.display = 'none';
});

const message = document.createElement('p');
message.className = 'message';
message.textContent = 'Code not found.';

const submit = document.createElement('button');
submit.textContent = 'Submit';
// upon submit, check if code is part of keys in listOfCodes
submit.addEventListener('click', () => {
  if (Object.keys(listOfCodes).includes(input.value)) {
    welcomeDiv.style.display = 'none';
    // loadingPage();
    renderGreeting(input.value);
  } else {
    message.style.display = 'block';
  }
});

inputDiv.append(input, message);
form.append(inputDiv, submit);
welcomeDiv.append(form);
document.body.appendChild(welcomeDiv);
