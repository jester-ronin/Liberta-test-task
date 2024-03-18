import './index.html';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


document.addEventListener('DOMContentLoaded', function () {


    const rangeInput = document.getElementById('rangeSlide');
    const numberLabel = document.querySelector('.form-label');


    function changeSquare(input) {
        input.addEventListener('input', function () {
            numberLabel.textContent = this.value + "м²";
        });
    }



    const button = document.getElementById('consultationButton');
    const backLink = document.getElementById('backLink');
    const content1 = document.getElementById('main1');
    const content2 = document.getElementById('main2');



    button.addEventListener('click', function () {
        content1.style.display = 'none';
        content2.style.display = 'flex';
    });

    backLink.addEventListener('click', function () {
        content1.style.display = 'flex';
        content2.style.display = 'none';
    })

    changeSquare(rangeInput)

})