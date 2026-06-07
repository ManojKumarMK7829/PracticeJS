const increaseBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrement');
let counterNumber = document.getElementById('counterNumber');

let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    counterNumber.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterNumber.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    counterNumber.textContent = count;
}); 