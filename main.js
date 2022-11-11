// Google map

let map;
let palmJumeirahLatLng = { lat: 25.112432, lng: 55.138977 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: palmJumeirahLatLng,
    zoom: 12,
  });
}

window.initMap = initMap;

// ////////////////////
// Partners Logo Slider

$(".partners-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  centerPadding: "600px",

  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

// Hot Parking Spots Slider
$(".spot-slider").slick({
  infinite: true,
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: "250px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// ///////////////////////
// Testimonials slider

$(".testimonials-slider").slick({
  infinite: true,
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: "450px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
