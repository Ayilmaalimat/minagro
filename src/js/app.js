particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 740,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 800,
          "rotateY": 1500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#2980b9",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

let isOpenFeedBack = false
let isOpenBurgerMenu = false
$('.main__contact').on('click',function(){
  isOpenFeedBack = !isOpenFeedBack
  if(isOpenFeedBack) {
    $('.main__content').hide()
    $('.main__form').removeClass('animate__bounceOut').show().addClass('animate__bounceIn')
    $('.main__form img').show()
    $(this).hide()
  }
})

$('.main__form img').on('click',function(){
  isOpenFeedBack = !isOpenFeedBack
  if(!isOpenFeedBack) {
    $('.main__form').removeClass('animate__bounceIn').addClass('animate__bounceOut')
    setTimeout(()=>{
      $('.main__content').show()
      $(this).hide()
      $('.main__contact').show()
      $('.main__form').hide()
    },600)

  }
})
$('.menu-trigger').on('click',function(){
  isOpenBurgerMenu = true
  return isOpenBurgerMenu && $('.inner-container').css({"display" : "block"})
})
$('.close-trigger').on('click',function () {
  isOpenBurgerMenu = false
  return !isOpenBurgerMenu && setTimeout(()=>$('.inner-container').css({"display":"none"}),500)
})