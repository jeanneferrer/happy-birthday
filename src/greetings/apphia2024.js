import './apphia2024.css';
import coverDisc from '../assets/apphia2024/cover-disc.jpg';
import mom from '../assets/apphia2024/mom.JPG';
import dad from '../assets/apphia2024/dad.jpeg';
import chester from '../assets/apphia2024/chester.jpg';
import shai from '../assets/apphia2024/shai.jpg';
import ken from '../assets/apphia2024/ken.jpg';
import hysher from '../assets/apphia2024/hysher.jpg';
import iris from '../assets/apphia2024/iris.jpg';
import dhriti from '../assets/apphia2024/dhriti.jpg';
import af from '../assets/apphia2024/af.jpeg';
import pa from '../assets/apphia2024/pa.jpeg';
import pp from '../assets/apphia2024/pp.jpeg';
import h from '../assets/apphia2024/h.jpeg';
import ibw from '../assets/apphia2024/ibw.jpg';
import ams from '../assets/apphia2024/ams.jpeg';

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
      { letter: 'A', meaning: 'Adorably Funny', picSrc: af },
      { letter: 'P', meaning: 'Pretty Annoying', picSrc: pa },
      { letter: 'P', meaning: 'Poopy Pants', picSrc: pp },
      { letter: 'H', meaning: 'Hangry', picSrc: h },
      { letter: 'I', meaning: 'Intelligent (???)', picSrc: ibw },
      { letter: 'A', meaning: 'Always My Sister', picSrc: ams },
    ];
    acronymDiv.className = 'acronym-container';
    acronym.forEach((letter) => {
      const section = document.createElement('section');
      const subHeader = document.createElement('h2');
      subHeader.className = 'acronym-letter';
      subHeader.textContent = `${letter.letter} is for `;
      const subHeaderSpan = document.createElement('span');
      subHeaderSpan.textContent = letter.meaning;
      const img = new Image();
      img.src = letter.picSrc;
      img.className = 'acronym-pic';
      subHeader.appendChild(subHeaderSpan);
      section.append(subHeader, img);
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
        name: 'Kuya Ken',
        picSrc: ken,
        message: ['Happy Birthday Apphia! Wishing you all the best things in life. Enjoy your special day and Ingats as well always.  God bless!', '- kuya ken'],
      },
      {
        name: 'Hysher',
        picSrc: hysher,
        message: ['Hi girlie, happy happy birthday! So grateful for u 🙄😝 hang soon ILY po 😍'],
      },
      {
        name: 'Iris',
        picSrc: iris,
        message: ['hi apph!!! happy birthday :)) ur one of my bffs and i cant wait to spend my years in uni with an amazing person like u :3'],
      },
      {
        name: 'Dhriti',
        picSrc: dhriti,
        message: ['i\'ve know you for 2 years now I still remember the first time we met. It was the most random day at school and you showed up..sat right in front of me 😭 I never thought you were gonna be this close but here we are! thank you for everything🎀 thank you for making me laugh, being there for me, motivating me to do better, and always hearing me out. I hope that we stay friends for a long long time and I love you. I hope this year brings you wonderful memories!!! let\'s go to the Philippines together.'],
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
