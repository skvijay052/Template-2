 $(document).ready(function() {
  
    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });
    
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });


    window.setTimeout('fadeout();', 3000);  

    $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300, 
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true, 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3, 
                centerMode: false,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  centerMode: false,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            } 
          ]
      });

      $('.carsousel-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 300, 
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,  
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2, 
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            } 
          ]
      });

 });

 function fadeout(){
    $('.overlay').delay(1000).fadeOut('slow', function() {
       $('.overlay, body').removeClass('loaded');
    });
}

 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 180) {
        $('.secondary-header').addClass('fixed-header'); 
    }
    else {
        $('.secondary-header').removeClass('fixed-header'); 
    }
}); 