$(document).ready(function () {
   $(".banner").slick({
       adaptiveHeight: false,
       autoplay: true,
       autoplaySpeed: 2000,
       infinite: true,
       speed: 500,
       fade: true,
       cssEase: "linear",
   });

   $(".middle-div .middle-slide").slick({
       adaptiveHeight: false,
       autoplay: true,
       infinite: true,
       autoplaySpeed: 2000,
       slidesToShow: 3,
       slidesToScroll: 1,
   });

   $(".partner-slider").slick({
       autoplay: true,
       infinite: true,
       autoplaySpeed: 800,
       slidesToShow: 4,
       slidesToScroll: 4,
   });

   $(".testimonial-slider").slick({
       autoplay: true,
       infinite: true,
       autoplaySpeed: 2000,
       slidesToShow: 2,
       slidesToScroll: 2,
       dots: true,
   });

   $(".course-slider").slick({
       autoplay: true,
       infinite: true,
       autoplaySpeed: 4000,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: false,
   });
});
