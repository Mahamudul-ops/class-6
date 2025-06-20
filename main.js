const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

incrementBtn.addEventListener('click', () => {
  if (count < 100) {
    count++;
    counterDisplay.textContent = count;
  }
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
  }
});