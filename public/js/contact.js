(function () {
    "use strict";

    let form = document.querySelector('#contact-form-button');

    document.querySelector('#contact-form-button').addEventListener('click', (event) => {
        console.log('Your message was sent!')

        event.preventDefault();
        event.stopPropagation();

        let formValid = true;

        if (!form.checkValidity()) {
            formValid = false;
        }
        form.classList.add('was-validated');
        if (!formValid) {
            sendTheEmail();
        }

    })

    function sendTheEmail() {
        let firstName = document.querySelector('#first-name').value;
        let lastName = document.querySelector('#last-name').value;
        let email = document.querySelector('#mail').value;
        let message = document.querySelector('#msg').value;

        console.log("First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email + "\nMessage: " + message);
    }
})();

