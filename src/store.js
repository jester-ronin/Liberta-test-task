document.addEventListener('DOMContentLoaded', function () {

    let clientInfo = {
        name: '',
        telephone: '',
        comment: '',
        typeOfRenovation: '',
        typeOfProperty: '',
        consultationOption: '',
        square: '',
    }

    const propertyRadioButton = document.querySelectorAll('input[name="propertyTypeOptions"]');
    const renovationRadioButton = document.querySelectorAll('input[name="btnradio"]');
    const consultationRadioButton = document.querySelectorAll('input[name="consultation"]')
    const rangeInput = document.getElementById('rangeSlide');
    const textInput = document.querySelectorAll('.form-control-lg');



    function getRangeData(input) {
        input.addEventListener('input', function () {
            clientInfo.square = (this.value - this.min) / (this.max - this.min) * 100 + "м²";
            console.log(clientInfo);
        })
    }


    function getRadioButtonData(input) {
        const inputArray = Array.from(input);
        inputArray.forEach(radioButton => {
            radioButton.addEventListener('change', function () {
                if (this.checked) {
                    switch (input) {
                        case renovationRadioButton:
                            clientInfo.typeOfRenovation = this.value;
                            console.log(clientInfo);
                            break;
                        case propertyRadioButton:
                            clientInfo.typeOfProperty = this.value;
                            console.log(clientInfo);
                            break;
                        case consultationRadioButton:
                            clientInfo.consultationOption = this.value;
                            console.log(clientInfo);
                            break;

                    }
                }
            });
        });
    }

    function getTextInputData(input) {
        const inputArray = Array.from(input);
        inputArray.forEach(textField => {
            textField.addEventListener('change', function () {
                if (this.value) {
                    switch (this.name) {
                        case "name":
                            clientInfo.name = this.value;
                            console.log(clientInfo);
                            break;
                        case "telephone":
                            clientInfo.telephone = this.value;
                            console.log(clientInfo);
                            break;
                        case "comment":
                            clientInfo.comment = this.value;
                            console.log(clientInfo);
                            break;
                    }
                }
            });
        });
    }
    



    getRadioButtonData(propertyRadioButton);
    getRadioButtonData(renovationRadioButton);
    getRadioButtonData(consultationRadioButton);
    getRangeData(rangeInput);
    getTextInputData(textInput);
 

})