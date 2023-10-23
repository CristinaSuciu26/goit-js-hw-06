function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]')
const input = document.querySelector('input[type="number"]');

createButton.addEventListener('click', function() { 
  const value = parseInt(input.value);

  for (let i = 0; i < value; i++) {
    const boxes = document.createElement('div');
    boxes.style.width = '30px';
    boxes.style.height = '30px';
    boxes.style.backgroundColor = getRandomHexColor();
    document.body.appendChild(boxes);

    destroyButton.addEventListener('click', function() {
      boxes.remove();
    });
  }
});
