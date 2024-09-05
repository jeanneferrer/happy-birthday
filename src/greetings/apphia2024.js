import './apphia2024.css';

export default () => ({
  code: 'AF09202024',
  renderGreetingCard() {
    const greetingCard = document.createElement('div');
    greetingCard.className = 'greeting-card';

    const header1 = document.createElement('h1');
    header1.textContent = '~ Happy birthday, Apphia! ~';

    // A is for Adorably Funny
    const section1 = document.createElement('section');
    const subHeader1 = document.createElement('h2');
    subHeader1.textContent = 'A is for ';
    const subHeader1Span = document.createElement('span');
    subHeader1Span.textContent = 'Adorably Funny';
    subHeader1.appendChild(subHeader1Span);
    section1.appendChild(subHeader1);

    // repeat above code for each letter in the name
    // P is for Pretty Annoying
    const section2 = document.createElement('section');
    const subHeader2 = document.createElement('h2');
    subHeader2.textContent = 'P is for ';
    const subHeader2Span = document.createElement('span');
    subHeader2Span.textContent = 'Pretty Annoying';
    subHeader2.appendChild(subHeader2Span);
    section2.appendChild(subHeader2);

    // P is for Poopy Pants
    const section3 = document.createElement('section');
    const subHeader3 = document.createElement('h2');
    subHeader3.textContent = 'P is for ';
    const subHeader3Span = document.createElement('span');
    subHeader3Span.textContent = 'Poopy Pants';
    subHeader3.appendChild(subHeader3Span);
    section3.appendChild(subHeader3);

    // H is for Hangry
    const section4 = document.createElement('section');
    const subHeader4 = document.createElement('h2');
    subHeader4.textContent = 'H is for ';
    const subHeader4Span = document.createElement('span');
    subHeader4Span.textContent = 'Hangry';
    subHeader4.appendChild(subHeader4Span);
    section4.appendChild(subHeader4);

    // I is for Intelligently Dumb
    const section5 = document.createElement('section');
    const subHeader5 = document.createElement('h2');
    subHeader5.textContent = 'I is for ';
    const subHeader5Span = document.createElement('span');
    subHeader5Span.textContent = 'Intelligently Dumb';
    subHeader5.appendChild(subHeader5Span);
    section5.appendChild(subHeader5);

    // A is for Always My Sister
    const section6 = document.createElement('section');
    const subHeader6 = document.createElement('h2');
    subHeader6.textContent = 'A is for ';
    const subHeader6Span = document.createElement('span');
    subHeader6Span.textContent = 'Always My Sister';
    subHeader6.appendChild(subHeader6Span);
    section6.appendChild(subHeader6);

    greetingCard.append(header1, section1, section2, section3, section4, section5, section6);

    return greetingCard;
  },
});
