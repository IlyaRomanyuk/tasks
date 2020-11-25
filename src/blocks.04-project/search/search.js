const seartchButton = document.querySelector('.search__button');
const seartchInput = document.querySelector('.search__input');

seartchButton.addEventListener('click', (e) => {
  seartchInput.classList.toggle('search__input_disabled');
});
