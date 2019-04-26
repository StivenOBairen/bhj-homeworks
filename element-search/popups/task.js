
const textBlocks = document.querySelectorAll('div'),
      modalMain = document.getElementById('modal_main'),
      modalSuccess = document.getElementById('modal_success'),
      showSuccessBtn = document.querySelector('.btn'),
      closeBtn = document.querySelectorAll('.modal__close');

      for(let i = 0; i < textBlocks.length; i++) {
      	textBlocks[i].addEventListener('click', (e) => {
      		if(!e.target.classList.contains('modal') &&
      			!e.target.classList.contains('modal__close') &&
      			!modalSuccess.classList.contains('modal_active')) {
      			modalMain.classList.add('modal_active');
      		}
      	});
      }

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
