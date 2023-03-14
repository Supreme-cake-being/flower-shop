$('.responsive').slick({
  // dots: true,
  prevArrow: '<button type="button" class="my-slick-prev"><svg class="arrow-left-icon" width="61" height="61"><use href="./img/icons.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="my-slick-next"><svg class="arrow-right-icon" width="61" height="61"><use href="./img/icons.svg#icon-arrow-right"></use></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  variableWidth: true, // обовязково додається, щоб частина картки заходило за вьюпорт

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});