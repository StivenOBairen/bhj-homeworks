const rotators = document.querySelectorAll('.rotator__case');

function interval(rotators) {
	let counter = 1;
	setInterval( () => {
			for (let i = 0; i < rotators.length; i++) {
				rotators[i].classList.remove('rotator__case_active');
			}
			rotators[counter].classList.add('rotator__case_active');

		counter++;
		console.log(counter);
		counter >= rotators.length ? counter = 0 : void 0;
	}, 1000);
}

interval(rotators);
