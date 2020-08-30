const toggleCurrentActive = (action) => {
  testimonialCarousel[currentActive].classList.toggle('inactive');
  if (action === "next") {
    if (currentActive+1 > testimonialCarousel.length-1) {
      currentActive = 0;
    } else {
      currentActive++;
    }
  } else { // action == 'prev'
    if (currentActive-1 === -1) {
      currentActive = testimonialCarousel.length-1;
    } else {
      currentActive--;
    }
  }
  testimonialCarousel[currentActive].classList.toggle('inactive');
}

var currentActive = 0;
const testimonialCarousel = document.querySelectorAll('.testimonial');