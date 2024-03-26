$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3500,
  infinite: true,
  slidesToScroll: 4,
  slidesToShow: 4,
  arrows: true,
  prevArrow:"<button class='arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button class='arrows arrow-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  draggable:false,
  dots: true,
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        arrows: false,
        infinite:false,
        slidesToShow: 3.44,
        slidesToScroll: 3,
        draggable:true,
        // slidesToShow: 4.72,
        // slidesToScroll: 4,
      }
    },
    // {
    //   breakpoint: 1089,
    //   settings: {
    //     arrows: false,
    //     infinite:false,
    //     slidesToShow: 3.2,
    //     slidesToScroll: 3,
    //   }
    // },

    {
      breakpoint: 863,
      settings: {
        arrows: false,
        infinite:false,
        slidesToShow:2.5,
        slidesToScroll:2,
        draggable:true
        // centerMode: true,
        // centerPadding: '20px',
        // slidesToShow: 2.63,
      }
    },

    {
      breakpoint: 515,
      settings: {
        arrows: false,
        dots:false,
        infinite:false,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        draggable:true
        // centerMode: true,
        // centerPadding: '40px',
      }
    },
    {
      breakpoint: 440,
      settings: {
        arrows: false,
        dots:false,
        infinite:false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        draggable:true
      }
    },
  ]
});

