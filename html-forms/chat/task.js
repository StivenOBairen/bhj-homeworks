const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const phrases = [
    'Сожалею, но все операторы заняты! Не пишите нам больше...',
    'Кто тут?',
    'Вы не купили ни одного товара, что с вами разговаривать?',
    'Где ваша совесть?!',
    'Здравствуйте! ^_^ и до свидания >_>'

];

const HH = new Date().getHours();
const mm = new Date().getMinutes();


chat.addEventListener('click', showChat);
input.addEventListener("change", sendMsg);

function showChat(event) {
    chat.classList.add('chat-widget_active');
}


function sendMsg(event) {

    messages.innerHTML += `
                          <div class="message message_client">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${event.target.value}
                            </div>
                          </div>
                        `;

    event.target.value = '';

    answerFromBot(phrases);
}

function answerFromBot(answer) {

    const random = Math.floor(Math.random() * (answer.length))

    return messages.innerHTML += `
                          <div class="message">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${answer[random]}
                            </div>
                          </div>
                        `;

}
