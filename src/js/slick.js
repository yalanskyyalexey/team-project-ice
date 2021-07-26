// Настройки для слайдера
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