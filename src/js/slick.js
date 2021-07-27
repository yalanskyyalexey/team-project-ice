// Настройки для слайдера
// <<<<<<< feature/slider_customer-reviews


// Настройки для слайдера customer_review
$('.review__slider-track').slick({
   arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  /* variableWidth: true, */
  infinite: false,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  dotsClass: "customer-reviews-dots"
  
 });
=======
$('.contact-list').slick({
  autoplay: true,
  speed: 1500,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 4000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: 'slick',
    },
  ],
});
// >>>>>>> main
