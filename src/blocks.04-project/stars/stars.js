const body = document.body;

let getRandomRating = (min, max, element) => {
  let elements = [...document.getElementById(element).parentElement.parentElement.children];

  // eslint-disable-next-line no-console
  console.log(elements);

  Math.floor(Math.random() * (max - min)) + 1;
};

body.addEventListener('click', (e) => {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((json) => getRandomRating(1, 5, e.target.getAttribute('id')));
  }, 1000);
});
