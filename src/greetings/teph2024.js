import './teph2024.css';
import spotifyLogo from '../assets/gen/spotify-logo.png';
import ago from '../assets/teph2024/ago.jpg';
import gabAly from '../assets/teph2024/gab-aly.jpg';
import regina from '../assets/teph2024/reg.jpg';
import us from '../assets/teph2024/us.jpg';
import jeck from '../assets/teph2024/jeck.jpg';
import zoeyAndFam from '../assets/teph2024/zoey-and-fam.jpg';

export default () => ({
  code: 'SDA09182024',
  renderGreetingCard() {
    const greetingCard = document.createElement('div');
    greetingCard.className = 'greeting-card';
    greetingCard.id = 'teph2024';

    const header1 = document.createElement('h1');
    header1.textContent = 'Happy 25th birthday, babe!';
    const img = document.createElement('img');
    img.id = 'party-cat';
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=o8lf1Dd2EtTKR8ygcD9GvW20gZ3Z7Yfa&s=dancecat', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        img.src = response.data.images.original.url;
      });
    const divider1 = document.createElement('hr');
    // next button

    const spotifyDiv = document.createElement('div');
    spotifyDiv.id = 'spotify-div';
    const spotifyInstruction = document.createElement('p');
    spotifyInstruction.textContent = 'Curated a playlist just for you, love. Click the Spotify logo below to listen.';
    const spotifyIconContainer = document.createElement('div'); // to make icon animate
    const spotifyIcon = new Image();
    spotifyIcon.src = spotifyLogo;
    spotifyIcon.id = 'spotify-logo';
    spotifyIconContainer.append(spotifyIcon);
    spotifyIconContainer.onclick = () => {
      window.open('https://open.spotify.com/playlist/2BexwO6lT5jzQ6dqqsliEq?si=940e6fdbf8ad4fb1', '_blank');
    };
    spotifyDiv.append(spotifyInstruction, spotifyIconContainer);
    const divider2 = document.createElement('hr');
    // next button

    const screenshotDiv = document.createElement('div');
    screenshotDiv.id = 'screenshot-div';
    const screenshotHeader = document.createElement('p');
    screenshotHeader.textContent = 'here\'s a screenshot of greetings from your friends!';
    const friendGreetingsContainer = document.createElement('div');
    const friendGreetingsHeader = document.createElement('h3');
    friendGreetingsHeader.id = 'friend-greetings-header';
    friendGreetingsHeader.textContent = 'pi burthdayyyy 🥳🎂';
    friendGreetingsContainer.id = 'friend-greetings';
    const friendGreetings = [
      {
        name: 'Ago',
        picLink: ago,
        message: [['Hi, Steph happy birthday putangina mo.', 'Love', 'Sperminator']],
      },
      {
        name: 'Gab & Aly',
        picLink: gabAly,
        message: [
          ['Happy Happy Birthday Mr. J!! More blessings, more birthdays, more inuman, and more bondings to come pri. Enjoy special f*ckin\' day!!!', '-Mr. Pool'],
          ['Happy birthday, Stephanieeeeeeeeee !!!!', 'May this year be filled with incredible adventures, endless laughter, and dreams coming true. Here’s to another year of unforgettable moments and cherished memories!', 'Thank you for meeting me and becoming such a great friend, Mimasaur. I also appreciate you being Gab\'s supportive and wonderful third wheel. Your presence truly makes everything better! Happy beer day, mah prend!', '-Aly'],
          ['Happy birthday step love you!!', '-Kirk'],
        ],
      },
      {
        name: 'Reg',
        picLink: regina,
        message: [['tep, people may not see you as the most reliable person in the room, but you\'ve proven yourself as the most reliable friend. you are lucky to have someone like Adi, as well as I know that she is with you.', 'happiest birthday, esteban.']],
      },
      {
        name: 'Jeck',
        picLink: jeck,
        message: [['to the man who owes me 2 cans of that one discontinued energy drink or should pay me a 100. happy birthday man, thanks for accompanying my stupid depressed ass xD', 'glad you now have someone supporting you other than us, youre a lucky bastard xD', 'proud of you for choosing to give yourself a chance to see a better day.', 'happy birthday again brotha. lets hang out again some time, cheers.']],
      },
      {
        name: 'Zoey',
        picLink: zoeyAndFam,
        message: [['Happiest birthday, tito carl! Thank for everything you\'ve done. To all the lutang moments of mine, you still manage to understand me. Huhu kalmahan mo magluto tataba na koooo. I hope you are happy spending your life with the  people you love and with ate adi! Enjoy your birthday at don\'t be sawa sa lahat ng tinatanong ko!!', 'Much love, Zoey!']],
      },
    ];
    friendGreetings.forEach((friend) => {
      const friendGreeting = document.createElement('div');
      friendGreeting.className = 'friend-greeting';
      const friendImg = document.createElement('img');
      friendImg.className = 'friend-pic';
      friendImg.src = friend.picLink;
      friendGreeting.append(friendImg);

      const friendMessage = document.createElement('div');
      friend.message.forEach((messageArray) => {
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        messageArray.forEach((messageLine) => {
          const messageLineElement = document.createElement('p');
          messageLineElement.textContent = messageLine;
          messageBubble.appendChild(messageLineElement);
        });
        friendMessage.appendChild(messageBubble);
      });
      friendGreeting.appendChild(friendMessage);
      friendGreetingsContainer.appendChild(friendGreeting);
    });
    screenshotDiv.append(screenshotHeader, friendGreetingsHeader, friendGreetingsContainer);
    const divider3 = document.createElement('hr');

    const endDiv = document.createElement('div');
    endDiv.id = 'end-div';
    const endPic = new Image();
    endPic.src = us;
    endPic.id = 'us-pic';
    const endMessage = document.createElement('div');
    const message1 = document.createElement('p');
    message1.textContent = 'even though you would think this is a normal Wednesday for you, i think otherwise - that today is such a special day.';
    const message2 = document.createElement('p');
    message2.textContent = 'i am so grateful that you were born. you have been nothing but patient and understanding, which always amazes me.';
    const message3 = document.createElement('p');
    message3.textContent = 'you are my weirdo, my best friend, my fave bully, my chef, and my partner for life.';
    const message4 = document.createElement('p');
    message4.textContent = 'let\'s celebrate more birthdays, okay, babe? i love you so much! hope you liked this little surprise. <3';
    endMessage.append(message1, message2, message3, message4);
    endDiv.append(endPic, endMessage);

    greetingCard.append(
      header1,
      img,
      divider1,
      spotifyDiv,
      divider2,
      screenshotDiv,
      divider3,
      endDiv,
    );
    return greetingCard;
  },
});
