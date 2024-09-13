import './teph2024.css';

export default () => ({
  code: 'SDA09182024',
  renderGreetingCard() {
    const greetingCard = document.createElement('div');
    greetingCard.className = 'greeting-card';
    greetingCard.id = 'teph2024';

    const header1 = document.createElement('h1');
    header1.textContent = 'Happy 25th birthday, babe!';

    const img = document.createElement('img');
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=o8lf1Dd2EtTKR8ygcD9GvW20gZ3Z7Yfa&s=party cat', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        img.src = response.data.images.original.url;
      });

    // message to him

    greetingCard.append(header1, img);
    return greetingCard;
  },
});
