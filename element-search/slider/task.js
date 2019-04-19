const switchLeft = document.querySelector(".slider__arrow_prev"),
      switchRight = document.querySelector(".slider__arrow_next");

const slides = document.querySelectorAll('.slider__item');
let sliderPosition = 0;

switchLeft.onclick = function() {
      slides[sliderPosition].classList.remove("slider__item_active");
      sliderPosition--;

      if (sliderPosition < 0) {
        sliderPosition = slides.length - 1;
      }
      slides[sliderPosition].classList.add("slider__item_active");
}

switchRight.onclick = function() {
      slides[sliderPosition].classList.remove("slider__item_active");
      sliderPosition++;

      if (sliderPosition >= slides.length) {
        sliderPosition = 0;
      }
      slides[sliderPosition].classList.add("slider__item_active");
}
