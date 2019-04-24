const fontSizers = document.querySelectorAll('.font-size'),
      book = document.querySelector('.book');

for (let i = 0; i < fontSizers.length; i++) {
	fontSizers[i].addEventListener('click', (click_event) => {
		click_event.preventDefault();
		const fontSwitch = click_event.target;
		for (let f = 0; f < fontSizers.length; f++) {
			fontSizers[f].classList.remove('font-size_active');
		}
		fontSwitch.classList.add('font-size_active');
    
		const size = fontSwitch.dataset.size;
    if (size == 'small') {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (size == 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }
	});
}
