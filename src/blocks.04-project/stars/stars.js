const body = document.body;

let getRandomRating = (id, rating) => {
  let itemCard = document.getElementById(id);
  let elements = [...itemCard.lastElementChild.children];
  let countStars = (Math.random() * Math.abs((5 - 1)) + 1).toFixed(1);
  // let lastNumeral = countStars.split('.')[countStars.split('.').length - 1];

  countStars = Math.round(countStars);
  for (let i = 0; i < countStars; i++) {
    elements[i].setAttribute('style', 'color: yellow');
  }

  itemCard.style.pointerEvents = 'none';
};

body.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-id')) {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.getAttribute('data-id')}`)
        .then((response) => response.json())
        .then((json) => getRandomRating(e.target.getAttribute('data-id'), e.target.getAttribute('data-note')));
    }, 1000);
  }
  return;
});
