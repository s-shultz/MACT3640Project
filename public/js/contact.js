(function () {
    "use strict";

    document.querySelector('#contact-form-button').addEventListener('click', (event) => {
    console.log('Your message was sent!')

    event.preventDefault();
    event.stopPropagation();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#mail').value;
    let message = document.querySelector('#msg').value;

    console.log("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    })
})();