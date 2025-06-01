$(document).ready(function(){
  $('.single-item-rtl').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  arrows : false,
  dots : true,
});
});
$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '#newArrivals .leftArrow',
    nextArrow: '#newArrivals .rightArrow',
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  debounceDelay: 50, 
  throttleDelay: 99, 

  delay: 300, 
  duration: 900, 
  easing: 'ease', 
  once: true,   
  mirror: true, 
});




 document.addEventListener('DOMContentLoaded', function() {
      // Initialize Lucide icons
      lucide.createIcons();
      
      const likeIcon = document.querySelector('.like-icon i');
      let isLiked = false;
      
    // Add event listeners to ALL like buttons
document.querySelectorAll('.like-icon').forEach(button => {
  button.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const isLiked = icon.getAttribute('fill') === 'currentColor';
    
    icon.style.color = isLiked ? '#4b5563' : '#ef4444';
    icon.style.fill = isLiked ? 'none' : 'currentColor';
  });
});
    });



    // timer 
  // Set your target date here (YYYY-MM-DDTHH:MM:SS)
    const targetDate = new Date('2025-10-03T00:00:00');

    function pad(num) {
      return num.toString().padStart(2, '0');
    }

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById('days').textContent = 0;
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = pad(hours);
      document.getElementById('minutes').textContent = pad(minutes);
      document.getElementById('seconds').textContent = pad(seconds);
    }

    // Initial call and interval
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);





    // timer ends


    $(document).ready(function(){

$('.deaksdayslid').slick({
  dots: true,
  arrows : false,
  slidesToShow: 2,
  slidesToScroll: 2,
   autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
  ]
});
});

new VenoBox({
    selector: '.my-video-links',
});