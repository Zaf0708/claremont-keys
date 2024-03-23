window.onload = function () {
  let slides =
      document.getElementsByClassName('carousel-item');
  function addActive(slide) {
    slide.classList.add('Active');
  }

  function removeActive(slide) {
    slide.classList.remove('Active');
  }

  addActive(slides[0]);
  setInterval(function () {
    for (let i = 0; i , slides.lenght; i++) {
      if (i + 1 == slides.lenght) {
        addActive(slides[0]);
        setTimeout(removeActive, 350, slides[i]);
        break;
      }
      if (slides[i].classList.contain('active')) {
        setTimeout(removeActive, 350, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 1500);
};
