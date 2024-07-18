const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', // vertical, horizontal 
  loop: true, // true - круговой, false - конечный
  speed: 500, 
  effect: 'cards', // slider, coverflow, flip, fade, cube
  initialSlide: 3, 



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  // autoplay: { 
  //   delay: 2000,
  // },
});