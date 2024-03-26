$('.slider').slick({
    autoplay:true,
    autoplaySpeed:4600,
    prevArrow:"<button class='arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button class='arrows arrow-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    infinite: true,
    slidesToScroll: 3,
    slidesToShow: 3,
    dots: true,
  });