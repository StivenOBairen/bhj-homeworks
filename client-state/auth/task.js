const authForm = document.getElementById('signin');
authForm.classList.add('signin_active');

const welcomeMsg = document.getElementById('welcome'),
      signinBtn = document.getElementById('signin__btn'),
      userId = document.getElementById('user_id');
signinBtn.addEventListener('click', sendForm);

function sendForm(event) {

    event.preventDefault();

    const signinForm = document.getElementById('signin__form'),
          formData = new FormData(signinForm);

    const userRequest = new XMLHttpRequest();
    userRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    userRequest.addEventListener('readystatechange', showData);
    userRequest.send(formData);

    function showData(event) {

        if (userRequest.readyState === 4 && userRequest.status === 200) {

            const response = JSON.parse(userRequest.responseText);

            if (response.success) {

                localStorage.userId = response.user_id;

                authForm.classList.remove('signin_active');
                welcomeMsg.classList.add('welcome_active');
                userId.innerText = response.user_id;

            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
}

function init() {

    if (localStorage.userId) {
        authForm.classList.remove('signin_active');
        welcomeMsg.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}

init();
