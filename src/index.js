import _ from 'lodash';
import './styles.css';
// import Icon from './icon.png';

function welcomeComponent() {
  const element = document.createElement('div');
  element.className = 'welcome';
  const headerDiv = document.createElement('div');
  const header1 = document.createElement('h1');
  header1.textContent = 'Happy birthday,';
  const header2 = document.createElement('h1');
  header2.textContent = 'dearest one! 🎉🎂🎈🎁';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'I just want to make you feel special on YOUR day, so I created a custom webpage greeting for ya. Please proceed to the next step with the link below.';
  const link = document.createElement('a');
  link.href = '';
  link.textContent = 'Next';
  headerDiv.append(header1, header2);
  element.append(headerDiv, paragraph, link);

  return element;
}

document.body.appendChild(welcomeComponent());
