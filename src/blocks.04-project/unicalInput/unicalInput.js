const inputElement = document.querySelector('.unicalInput__element');
const labelElement = document.querySelector('.unicalInput__label');

document.addEventListener('click', (e) => {
  if (e.target === inputElement) {
    labelElement.classList.remove('unicalInput__label_disabled');
  } else {
    labelElement.classList.add('unicalInput__label_disabled');
  }
});

