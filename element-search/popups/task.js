
const modalMain = document.getElementById('modal_main'),
      modalSuccess = document.getElementById('modal_success'),
      showSuccessBtn = document.querySelector('.show-success'),
      closeBtn = document.querySelectorAll('.modal__close');


document.addEventListener('click', () => {
  if(!modalMain.classList.contains('modal_active')){
    modalMain.classList.add('modal_active');
  }
});

showSuccessBtn.addEventListener('click', () => {
  	modalMain.classList.remove('modal_active');
  	modalSuccess.classList.add('modal_active');
});

for ( let i=0; i < closeBtn.length; i++ ) {
    closeBtn[i].addEventListener('click', (toClose) => {
        const modalClose = toClose.target.parentElement.parentElement;
        console.log(modalClose);
        modalClose.classList.remove('modal_active');
    });
}
