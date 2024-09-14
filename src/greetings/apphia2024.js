import './apphia2024.css';
import coverDisc from '../assets/apphia2024/cover-disc.jpeg';
import mom from '../assets/apphia2024/mom.JPG';
import dad from '../assets/apphia2024/dad.jpeg';
import chester from '../assets/apphia2024/chester.jpg';
import shai from '../assets/apphia2024/shai.jpg';
import hysher from '../assets/apphia2024/hysher.jpg';

export default () => ({
  code: 'AF09202024',
  renderGreetingCard() {
    const greetingCard = document.createElement('div');
    greetingCard.id = 'apphia2024';
    greetingCard.className = 'greeting-card';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header-div';
    const header1 = document.createElement('h1');
    header1.textContent = '~ Happy 19th birthday, Apphia! ~';
    const coverDiscImg = new Image();
    coverDiscImg.src = coverDisc;
    coverDiscImg.alt = 'cover-disc';
    coverDiscImg.id = 'cover-disc';
    const acronymHeader = document.createElement('p');
    acronymHeader.textContent = 'hi bestie, i made an acronym of your name for my birthday message to you. 😆';
    headerDiv.append(header1, coverDiscImg, acronymHeader);

    const acronymDiv = document.createElement('div');
    const acronym = [
      { letter: 'A', meaning: 'Adorably Funny' },
      { letter: 'P', meaning: 'Pretty Annoying' },
      { letter: 'P', meaning: 'Poopy Pants' },
      { letter: 'H', meaning: 'Hangry' },
      { letter: 'I', meaning: 'Intelligently Dumb' },
      { letter: 'A', meaning: 'Always My Sister' },
    ];
    acronymDiv.className = 'acronym-container';
    acronym.forEach((letter) => {
      const section = document.createElement('section');
      const subHeader = document.createElement('h2');
      subHeader.className = 'acronym-letter';
      subHeader.textContent = `${letter.letter} is for `;
      const subHeaderSpan = document.createElement('span');
      subHeaderSpan.textContent = letter.meaning;
      subHeader.appendChild(subHeaderSpan);
      section.appendChild(subHeader);
      acronymDiv.appendChild(section);
    });

    const friendGreetingsInstruction = document.createElement('p');
    friendGreetingsInstruction.id = 'friend-greetings-instruction';
    friendGreetingsInstruction.textContent = 'Here are some birthday greetings from your friends and loved ones! Hover over (for desktop) or tap (for mobile) the cards to see their messages. 🥳';

    const friendGreetingsContainer = document.createElement('div');
    friendGreetingsContainer.id = 'friend-greetings-container';
    const friendGreetings = [
      {
        name: 'Mom',
        picSrc: mom,
        message: ['Eto yung message ko,', 'Apingping, i love you! Stay humble and the Lord will lift you up! You are fearless! Jesus loves you!'],
      },
      {
        name: 'Dad',
        picSrc: dad,
        message: ['Hey my digital nomad buddy! Anywhere, anytime we strike together!', 'Keep on growing and glowing in the Lord!! We love you! ❤️'],
      },
      {
        name: 'Kuya Chester',
        picSrc: chester,
        message: ['Happy Birthday, Apphiaaaaaa! 🎉 I hope your special day is filled with joy, laughter, and all the things you love. You deserve all the happiness in the world. Can\'t wait to celebrate with you and make more amazing memories together! Have a fantastic day! 💖'],
      },
      {
        name: 'Shatina',
        picSrc: shai,
        message: ['Happy 19th ate apita!', 'I miss you so much, and i wish you the best of the best!', 'always take care,', 'love you to the alpha and back', 'c u soon!!', '- shai'],
      },
      {
        name: 'Hysher',
        picSrc: hysher,
        message: ['Hi girlie, happy happy birthday! So grateful for u 🙄😝 hang soon ILY po 😍'],
      },
    ];

    friendGreetings.forEach((friend) => {
      const friendDiv = document.createElement('div');
      friendDiv.className = 'friend-greeting';
      const friendDivInner = document.createElement('div');
      friendDivInner.className = 'friend-greeting-inner';

      const friendDivFront = document.createElement('div');
      friendDivFront.className = 'friend-greeting-front';
      const friendPic = document.createElement('img');
      friendPic.src = friend.picSrc;
      friendPic.alt = friend.name;
      friendPic.className = 'friend-pic';
      friendDivFront.appendChild(friendPic);

      const friendDivBack = document.createElement('div');
      friendDivBack.className = 'friend-greeting-back';
      friend.message.forEach((line) => {
        const messageLine = document.createElement('p');
        messageLine.textContent = line;
        friendDivBack.appendChild(messageLine);
      });
      friendDivInner.append(friendDivFront, friendDivBack);
      friendDiv.append(friendDivInner);
      friendGreetingsContainer.appendChild(friendDiv);
    });

    greetingCard.append(
      headerDiv,
      acronymDiv,
      friendGreetingsInstruction,
      friendGreetingsContainer,
    );

    return greetingCard;
  },
});
