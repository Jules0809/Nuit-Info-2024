<template>
    <div class="ocean">
      <!-- Curseur pour contrôler le nombre de poissons -->
      <div class="slider-container">
        <label for="fishSlider">Nombre de poissons visibles:</label>
        <input type="range" id="fishSlider" v-model="sliderValue" min="0" max="50" />
        <p>{{ sliderValue }} poissons visibles</p>
      </div>
  
      <!-- Poissons qui nagent -->
      <div class="fish-container">
        <div
          v-for="(fish, index) in visibleFish"
          :key="index"
          class="fish"
          :style="getFishStyle(fish)"
        >
          🐟
        </div>
      </div>
  
      <!-- Bulles animées -->
      <div class="bubble-container">
        <div v-for="n in 20" :key="n" class="bubble" :style="getRandomBubbleStyle()"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Nombre total de poissons créés
        totalFish: 50,
        sliderValue: 0, // Valeur du curseur qui contrôle le nombre de poissons visibles
      };
    },
    computed: {
      // Poissons visibles selon la valeur du curseur
      visibleFish() {
        // Limiter le nombre de poissons visibles à la valeur du curseur
        const visibleCount = this.sliderValue; // Utilise directement la valeur du curseur
        return Array.from({ length: visibleCount }, (_, index) => ({
          id: index,
          // Donne à chaque poisson une position, direction et vitesse aléatoires
          top: Math.random() * 100,
          left: Math.random() * 100,
          speed: Math.random() * 5 + 2, // Vitesse aléatoire entre 2 et 7 secondes
          directionX: Math.random() > 0.5 ? 1 : -1, // Direction horizontale (gauche ou droite)
          directionY: Math.random() > 0.5 ? 1 : -1, // Direction verticale (haut ou bas)
        }));
      },
    },
    methods: {
      // Méthode pour générer les styles dynamiques des poissons
      getFishStyle(fish) {
        return {
          position: 'absolute',
          top: `${fish.top}%`, // Position verticale aléatoire
          left: `${fish.left}%`, // Position horizontale aléatoire
          animation: `fish-swim ${fish.speed + 2}s ease-in-out infinite, bubble-move ${fish.speed}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`, // Délai d'animation aléatoire
          fontSize: '2rem',
          transform: `scaleX(${fish.directionX}) scaleY(${fish.directionY})`, // Inverser la direction pour chaque poisson
        };
      },
  
      // Méthode pour générer des bulles animées
      getRandomBubbleStyle() {
        const randomSize = Math.random() * (25 - 10) + 10; // Taille aléatoire entre 10px et 25px
        const randomLeft = Math.random() * 100; // Position horizontale aléatoire
        const randomDelay = Math.random() * 5 + 2; // Délai d'animation aléatoire
        return {
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          left: `${randomLeft}%`,
          animationDuration: `${randomDelay}s`, // Variation de la vitesse de montée
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Fond de la page */
  .ocean {
    position: relative;
    height: 100vh;
    background-color: #87cefa; /* Bleu ciel */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Curseur et son label */
  .slider-container {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #333;
  }
  
  #fishSlider {
    width: 200px;
  }
  
  /* Conteneur des poissons */
  .fish-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  /* Style des poissons */
  .fish {
    font-size: 2rem;
    position: absolute;
    transition: transform 1s ease;
    animation: fish-swim 5s ease-in-out infinite, bubble-move 6s ease-in-out infinite;
  }
  
  /* Animation des poissons, mouvement vertical */
  @keyframes fish-swim {
    0% {
      transform: translateY(0); /* Démarre à la position initiale */
    }
    100% {
      transform: translateY(-100vh); /* Fait monter les poissons */
    }
  }
  
  /* Mouvement horizontal des poissons, comme une vague */
  @keyframes bubble-move {
    0% {
      transform: translateX(0); /* Commence à la position initiale */
    }
    25% {
      transform: translateX(5px); /* Petits déplacements horizontaux */
    }
    50% {
      transform: translateX(-5px); /* Petits déplacements horizontaux */
    }
    75% {
      transform: translateX(5px); /* Petits déplacements horizontaux */
    }
    100% {
      transform: translateX(0); /* Retour à la position initiale */
    }
  }
  
  /* Bulles animées */
  .bubble-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
  
  .bubble {
    position: absolute;
    bottom: -50px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: bubble-rise 6s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes bubble-rise {
    0% {
      transform: translateY(0);
      opacity: 0.7;
    }
    50% {
      opacity: 0.9;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
  </style>
  