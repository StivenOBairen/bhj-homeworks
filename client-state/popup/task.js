
const popupSubscribe = document.getElementById('subscribe-modal');
const modalClose = popupSubscribe.querySelector('.modal__close');

window.addEventListener('load', checkCookie);
modalClose.addEventListener('click', closePopup);

function checkCookie(event) {
    if (!getCookie('isClosed')) {
        popupSubscribe.classList.add('modal_active');
    }
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

function closePopup(event) {

    event.preventDefault();

    document.cookie = 'isClosed=true';
    popupSubscribe.classList.remove('modal_active');
}
