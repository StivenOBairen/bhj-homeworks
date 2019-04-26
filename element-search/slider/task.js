const switchLeft = document.querySelector(".slider__arrow_prev"),
      switchRight = document.querySelector(".slider__arrow_next");

let sliderPosition = 1;

switchRight.addEventListener('click', () => {
  plusSlides(1);
});

switchLeft.addEventListener('click', () => {
  plusSlides(-1);
});

showSlides(sliderPosition);

function plusSlides(n) {
  showSlides(sliderPosition += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slider__item");
  if (n > slides.length) sliderPosition = 1;
  if (n < 1) sliderPosition = slides.length;
  for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slider__item_active');
  }
  slides[sliderPosition-1].classList.add('slider__item_active');
}
