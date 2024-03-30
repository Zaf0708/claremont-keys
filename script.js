const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 100;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Add event listeners for the navigation buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Add a slide animation interval
setInterval(nextSlide, 5000);








// const slider = document.querySelector('.slider');
// const imgs = slider.children;
// let currImg = 0;

// function updateImg() {
//   for (let i = 0; i < imgs.length; i++) {
//     imgs[i].classList.remove('current');
//     imgs[i].classList.remove('next');
//     imgs[i].classList.remove('prev');
//   }

//   imgs[currImg].classList.add('current');

//   if (currImg === 0) {
//     imgs[imgs.length - 1].classList.add('prev');
//     imgs[currImg + 1].classList.add('next');
//   } else if (currImg === imgs.length - 1) {
//     imgs[currImg - 1].classList.add('prev');
//     imgs[0].classList.add('next');
//   } else {
//     imgs[currImg - 1].classList.add('prev');
//     imgs[currImg + 1].classList.add('next');
//   }
// }

// setInterval(() => {
//   currImg = (currImg + 1) % imgs.length;
//   updateImg();
// }, 3000);

// updateImg();





// window.onload = function () {
//   let slides =
//       document.getElementsByClassName('carousel-item');

//   function addActive(slide) {
//       slide.classList.add('active');
//   }

//   function removeActive(slide) {
//       slide.classList.remove('active');
//   }

//   addActive(slides[0]);
//   setInterval(function () {
//       for (let i = 0; i < slides.length; i++) {
//           if (i + 1 == slides.length) {
//               addActive(slides[0]);
//               setTimeout(removeActive, 350, slides[i]);
//               break;
//           }
//           if (slides[i].classList.contains('active')) {
//               setTimeout(removeActive, 350, slides[i]);
//               addActive(slides[i + 1]);
//               break;
//           }
//       }
//   }, 4000);
// };
