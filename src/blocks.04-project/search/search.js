const seartchButton = document.querySelector('.search__button');
const seartchInput = document.querySelector('.search__input');

seartchButton.addEventListener('click', (e) => {
  seartchInput.classList.remove('search__input_disabled');
  seartchButton.classList.remove('search__button_active');
  seartchInput.focus();
});
