
const validationInput = document.getElementById('validation-input');
const dataLength = validationInput.getAttribute('data-length');
const validStyle = 'valid';
const invalidStyle = 'invalid';

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === parseInt(dataLength)) {
    validationInput.classList.remove(invalidStyle);
    validationInput.classList.add(validStyle);
  } else {
    validationInput.classList.remove(validStyle);
    validationInput.classList.add(invalidStyle);
  }
});
console.log(validStyle);
