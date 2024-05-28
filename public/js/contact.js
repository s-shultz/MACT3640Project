(function () {
    "use strict";

    let form = document.querySelector('#contact-form');

    document.querySelector('#contact-form-button').addEventListener('click', (event) => {

        event.preventDefault();
        event.stopPropagation();

        let formValid = true;

        if (!form.checkValidity()) {
            formValid = false;
        }
        form.classList.add('was-validated');
        if (formValid) {
            sendTheEmail();
        }

    })

    function sendTheEmail() {
        // console.log('Your message was sent!')
        // let firstName = document.querySelector('#first-name').value;
        // let lastName = document.querySelector('#last-name').value;
        // let email = document.querySelector('#mail').value;
        // let message = document.querySelector('#msg').value;
        let obj = {
            sub: "Contact Form Submission",
            txt: `From ${document.querySelector('#first-name').value} ${document.querySelector('#last-name').value}\n Email ${document.querySelector('#mail').value}\n Message ${document.querySelector('#msg').value}`,
        };

        fetch('/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((r) => r.json())
            .then((response) => {
                document.querySelector('#contact-button-response').innerHTML = response.result;
            })
            .catch((error) => {
                document.querySelector('#contact-button-response').innerHTML = 'Error: ' + error.message;
            })
            .then(() => {
                setTimeout(() => {
                    document.querySelector('#contact-button-response').innerHTML = '';
                }, "5000");
            });
    };
})();

