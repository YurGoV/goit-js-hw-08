import throttle from 'lodash.throttle';

const refForm = document.querySelector('form')
console.log(refForm);
// const refFormEmail = document.querySelectorAll('.feedback-form input');
const refFormEmail = document.querySelector('form input[type=email]');
const refFormMessage = document.querySelector('form textarea[name=message]');

console.log(refFormMessage);
console.log(refFormEmail);

refForm.addEventListener('input', throttle(cLog, 500))
// refForm.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

const savedForm = localStorage.getItem('feedback-form-state');
console.log(savedForm.length);
console.log(savedForm);
console.log(JSON.parse(savedForm));
const formWebData = JSON.parse(savedForm);
console.log(Object.entries(formWebData));

// const formDataTest
// if(!formData) {
//     formData = {
//         email: '',
//         messaghe: '',
//     }
// }

console.log(formWebData);

// let formData = {
//     email: formWebData.email,
//     message: formWebData.message,
// }

refFormEmail.value = formWebData.email;
refFormMessage.value = formWebData.message;

// console.log(formData);

function cLog(event) {
    // console.log(event.target.name);
    key = event.target.name;
    console.log(key);
    // console.log(event.target);
    // console.log(event.target.value);
    value = event.target.value;
    formWebData[key] = value;
    // console.log(formData[key]);
    console.log(formWebData);
    // console.log(typeof key);
    localStorage.setItem('feedback-form-state', JSON.stringify(formWebData))
}





// refFormMessage.value = 'wwwwwwwww'

// console.log(savedFormData.message);


// console.log(formData);