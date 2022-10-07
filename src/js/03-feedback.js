import throttle from 'lodash.throttle';

const refForm = document.querySelector('form')
console.log(refForm);
// const refFormEmail = document.querySelectorAll('.feedback-form input');
const refFormEmail = document.querySelector('form input[type=email]');
const refFormMessage = document.querySelector('form textarea[name=message]');
const refFormSubmitButton = document.querySelector('button');

console.log(refFormMessage);
console.log(refFormEmail);
console.log(refFormSubmitButton);



refForm.addEventListener('input', throttle(cLog, 500))
// refForm.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });


// refFormSubmitButton.addEventListener('submit', onSubmitButtonClick);
refForm.addEventListener('submit', onSubmitButtonClick);

function onSubmitButtonClick(event) {
    event.preventDefault();
    const {
        elements: { email, message }
     } = event.target;
     formData = {
        email: email.value,
        message: message.value,
     }
     console.log('отримані з форми дані:');
     console.log(formData);



    // console.log(event.currentTarget.message.value);
    // alert("Hello! I am an alert box!!");
    event.currentTarget.reset();
    // console.log('SSSSS');
    // refFormEmail.value = '';
    // refFormMessage.value = '';
    localStorage.removeItem('feedback-form-state')
    
}

const savedForm = localStorage.getItem('feedback-form-state');
// const isWebFormIsNotEmpty = (savedForm) => {
//     if (savedForm) {
//         refFormEmail.value = webData.email;
//         refFormMessage.value = webData.message;
//     }
// }


// console.log(savedForm.length);
console.log(savedForm);
// console.log(isWebFormIsNotEmpty());
// const test = isWebFormIsNotEmpty();
// console.log(JSON.parse(savedForm));


let webData = JSON.parse(savedForm);


// console.log(Object.entries(webData));



console.log(webData);

// let formData = {
//     email: webData.email,
//     message: webData.message,
// }


// refFormEmail.value = webData.email;
// refFormMessage.value = webData.message;

refFormEmail.value = writingDataToForm('email');
refFormMessage.value = writingDataToForm('message');



function writingDataToForm(field){
    if (webData === null) {
        return "";
    }
    // return webData.field;
    console.log(webData[field]);
    return webData[field];
}




// console.log(formData);

function cLog(event) {
    console.log(event.target.name);

    const key = event.target.name;
    if(!webData) {
        console.log('FFFFFFF');
        webData = {
            email: '',
            message: '',
        }
    }
    console.log(webData);
    // console.log(key);
    // console.log(event.target);
    console.log(event.target.value);

    const value = event.target.value;//bugFix
    webData[key] = value;

    // console.log(formData[key]);
    console.log(webData);
    // console.log(typeof key);

    localStorage.setItem('feedback-form-state', JSON.stringify(webData))

}


// localStorage.removeItem('feedback-form-state');//перевірка при відсутності даних у сховищі
