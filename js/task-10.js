function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)                                                         
    .padStart(6, 0)}`;
}

const createBoxes = document.querySelector('[data-create]');
const destroyBoxes = document.querySelector('[data-destroy]')
const amount = document.querySelector('input[type="number"]');

createBoxes.addEventListener('click', function() { 
  const value = parseInt(amount.value);

  for (let i = 0; i < value; i++) {
    const boxes = document.createElement('div');
    boxes.style.width = (30 + (i * 10)) + 'px';
    boxes.style.height = '30px';

    boxes.style.backgroundColor = getRandomHexColor();
    document.body.appendChild(boxes);

    destroyBoxes.addEventListener('click', function() {
      boxes.remove();
    });
  }
});



