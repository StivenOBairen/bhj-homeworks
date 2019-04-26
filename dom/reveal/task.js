const blocksToReveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', (scroll_event) => {
  const viewportHeight = window.innerHeight;

  for (let element of blocksToReveal) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
  }
});
