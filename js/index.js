document.addEventListener('DOMContentLoaded' , function() {
   document.addEventListener('scroll' , function(){
        scrollY > 0 ? 
        document.querySelector('.header').classList.add('scroll') :
        document.querySelector('.header').classList.remove('scroll');
   })
   initializeSlider();
})


function initializeSlider(){
    const swiper = new Swiper('.materials-section__slider', {
        // Optional parameters
        loop: true,
        clickable : true,
      
        // If we need pagination
        pagination: {
          el: '.materials-slider__pagination',
          clickable:true
        },
      });
}