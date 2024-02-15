import './index.html';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
console.log('Hello from index.js!');

document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('customRange1');
    const numberLabel = document.querySelector('.form-label');

    rangeInput.addEventListener('input', function() {
        const newValue = (this.value - this.min) / (this.max - this.min) * 100;
        numberLabel.textContent = this.value + "м²";
        numberLabel.style.left = `calc(${newValue}% - 10px)`;
        console.log(`calc(${newValue}% - 10px)`)
    });
});


