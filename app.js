/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 170, //quatidade de ramificações
        "density": {
          "enable": true,
          "value_area": 500 //espaçamento entre as ramificações
        }
      },
      "color": {
        "value": "#002fff",
      },
      "shape": {
        "type": ["line", "polygon", "line"], //circle, triangle "circle" "line" "edge" "triangle" "polygon" "star" "image" (["circle", "triangle", "image"] = varias formas)
        "stroke": {
          "width": 3, //tamanho da forma/imagem
          "color": "#002fff" //cor da forma/imagem
        },
        "polygon": {
          "nb_sides": 5 //especifica a quantidade de lados
        },
        "image": {
          "src": "img/github.svg",
          "width": 10,
          "height": 10 //configuração do tamanho da imagem
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 7, //velocidade da animação
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#7e2ee6", //cor da ligação
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7, //velocidade do movimento
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600, //direção da movimentação
          "rotateY": 1200
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
          "distance": 120 //medida do espaço do mouse
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
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);