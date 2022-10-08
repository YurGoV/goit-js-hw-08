import throttle from 'lodash.throttle';

const refForm = document.querySelector('form')
// console.log(refForm);

const refFormEmail = document.querySelector('form input[type=email]');
const refFormMessage = document.querySelector('form textarea[name=message]');
const refFormSubmitButton = document.querySelector('button');

refForm.addEventListener('input', throttle(onFormType, 500))

function onFormType(event) {

    const key = event.target.name;

    if(!webData) {
        webData = {
            email: '',
            message: '',
        }
    }

    const value = event.target.value;
    webData[key] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(webData))
}


refForm.addEventListener('submit', onSubmitButtonClick);

function onSubmitButtonClick(event) {
    event.preventDefault();
    const {
        elements: { email, message }
     } = event.target;
     const formData = {
        email: email.value,
        message: message.value,
     }

    if (email.value === '' || message.value === '') {
        return alert("Повинні бути заповнені\nяк електронна пошта так і текст повідомлення>");
    }

    console.log(formData);

    event.currentTarget.reset();

    localStorage.removeItem('feedback-form-state')
}

const savedForm = localStorage.getItem('feedback-form-state');

let webData = JSON.parse(savedForm);


refFormEmail.value = writingDataToForm('email');
refFormMessage.value = writingDataToForm('message');

function writingDataToForm(field){
    if (webData === null) {
        return "";
    }
    return webData[field];
}

// localStorage.removeItem('feedback-form-state');//перевірка чи працює при відсутності даних у сховищі


