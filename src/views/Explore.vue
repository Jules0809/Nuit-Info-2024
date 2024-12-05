<template>
  <div class="explore">
    <!-- Conteneur principal -->
    <div class="content">
      <!-- Image du corps humain -->
      <div class="image-container">
        <img src="../../Image/corp.png" alt="Image de corps humain" class="body-image" />
      </div>

      <!-- Cartes à droite -->
      <div class="cards-container">
        <div v-for="(card, index) in cards" :key="index" class="card" @click="handleCardClick(index)">
          <h3>{{ card.title }}</h3>
          <p>{{ card.shortDescription }}</p>
        </div>
      </div>
    </div>

    <!-- Popup pour le système respiratoire -->
    <div v-if="showRespiratoryComparison" class="comparison-modal">
      <div class="modal-content">
        <h2>Comparaison : Système Respiratoire et Coraux</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../public/Poumon.png" alt="Poumons humains" class="comparison-image" />
            <p>Poumons : Organe vital responsable de l'échange gazeux chez les humains.</p>
          </div>
          <div class="image-block">
            <img src="../../public/Corrail.png" alt="Structure de corail" class="comparison-image" />
            <p>Coraux : Organismes marins qui filtrent l'eau pour obtenir de l'oxygène et des nutriments.</p>
          </div>
        </div>
        <p class="comparison-text">
          Bien que les poumons et les coraux diffèrent en fonction et en structure, ils partagent une similarité fascinante : tous deux jouent un rôle clé dans les échanges gazeux. Les poumons permettent à l'oxygène d'entrer dans le sang, tandis que les coraux, via leurs polypes, absorbent l'oxygène dissous dans l'eau environnante.
        </p>
        <button @click="closeRespiratoryComparison">Fermer</button>
      </div>
    </div>

    <!-- Popup pour le système circulatoire -->
    <div v-if="showCirculatoryComparison" class="comparison-modal">
      <div class="modal-content">
        <h2>Comparaison : Système Circulatoire et Réseaux Vasculaires</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../public/Coeur.png" alt="Cœur humain" class="comparison-image heart-beat" />
            <p>Cœur : Organe qui pompe le sang à travers le corps.</p>
          </div>
          <div class="image-block">
            <img src="../../public/Courant_marin.png" alt="Réseaux vasculaires" class="comparison-image" />
            <p>Réseaux vasculaires : Structures qui transportent des fluides dans la nature.</p>
          </div>
        </div>
        <p class="comparison-text">
          Le système circulatoire et les réseaux vasculaires jouent un rôle similaire dans le transport de fluides essentiels, qu'il s'agisse de sang ou d'eau.
        </p>
        <button @click="closeCirculatoryComparison">Fermer</button>
      </div>
    </div>

  <!-- Popup pour le système nerveux -->
  <div v-if="showNervousComparison" class="comparison-modal">
    <div class="modal-content">
      <h2>Comparaison : Système Nerveux et Surface de l'Eau</h2>
      <div class="comparison-images">
        <div class="image-block">
          <img src="../../public/Cerveau.png" alt="Cerveau humain" class="comparison-image" />
          <p>Cerveau : Centre de contrôle des fonctions corporelles, traitant et transmettant des informations rapidement.</p>
        </div>
        <div class="image-block">
          <img src="../../public/Surface.png" alt="Surface de l'eau" class="comparison-image" />
          <p>Surface de l'eau : Milieu qui réagit aux stimuli externes, créant des vagues et des ondulations pour transmettre l'énergie.</p>
        </div>
      </div>
      <p class="comparison-text">
        Le système nerveux, comme la surface de l'eau, est un réseau de communication qui répond aux stimuli. Tandis que les neurones transmettent des signaux électriques dans le corps, la surface de l'eau réagit aux influences extérieures en formant des vagues, véhiculant l'énergie de manière dynamique.
      </p>
      <button @click="closeNervousComparison">Fermer</button>
    </div>
  </div>


    <!-- Popup pour le système digestif -->
    <div v-if="showDigestiveComparison" class="comparison-modal">
      <div class="modal-content">
        <h2>Comparaison : Système Digestif et Fleuve</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../public/Digestif.png" alt="Estomac humain" class="comparison-image" />
            <p>Estomac : Organe qui décompose les aliments en nutriments essentiels pour le corps.</p>
          </div>
          <div class="image-block">
            <img src="../../public/Fleuve.png" alt="Fleuve" class="comparison-image" />
            <p>Fleuve : Cours d'eau qui transporte et répartit les nutriments à travers les écosystèmes.</p>
          </div>
        </div>
        <p class="comparison-text">
          Le système digestif, tout comme un fleuve, joue un rôle crucial dans le transport et la distribution de substances vitales. Tandis que l'estomac décompose les aliments pour libérer des nutriments, un fleuve transporte l'eau et les nutriments à travers la nature, soutenant la vie de divers écosystèmes.
        </p>
        <button @click="closeDigestiveComparison">Fermer</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Explore",
  data() {
    return {
      cards: [
        {
          title: "Système circulatoire",
          shortDescription: "Le cœur et les vaisseaux sanguins.",
          description: "Le système circulatoire transporte le sang, les nutriments et l'oxygène à travers tout le corps."
        },
        {
          title: "Système respiratoire",
          shortDescription: "Les poumons et la respiration.",
          description: "Le système respiratoire permet l'échange des gaz nécessaires à la vie. Cliquez pour en savoir plus."
        },
        {
          title: "Système nerveux",
          shortDescription: "Le cerveau et les nerfs.",
          description: "Le système nerveux coordonne les actions du corps et transmet les signaux."
        },
        {
          title: "Système digestif",
          shortDescription: "L'estomac et les intestins.",
          description: "Le système digestif transforme les aliments en nutriments utilisables par le corps."
        }
      ],
      showRespiratoryComparison: false,
      showCirculatoryComparison: false,
      showNervousComparison: false,
      showDigestiveComparison: false
    };
  },
  methods: {
    handleCardClick(index) {
      switch (this.cards[index].title) {
        case "Système respiratoire":
          this.showRespiratoryComparison = true;
          break;
        case "Système circulatoire":
          this.showCirculatoryComparison = true;
          break;
        case "Système nerveux":
          this.showNervousComparison = true;
          break;
        case "Système digestif":
          this.showDigestiveComparison = true;
          break;
      }
    },
    closeRespiratoryComparison() {
      this.showRespiratoryComparison = false;
    },
    closeCirculatoryComparison() {
      this.showCirculatoryComparison = false;
    },
    closeNervousComparison() {
      this.showNervousComparison = false;
    },
    closeDigestiveComparison() {
      this.showDigestiveComparison = false;
    }
  }
};
</script>



<style scoped>
.explore {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.image-container {
  flex: 1;
  margin-right: 20px;
}

.body-image {
  width: 70%;
  height: 100vh;
  object-fit: cover;
  animation: fadeIn 1s ease-in;
}

.cards-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: black;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.comparison-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease;
}

.modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 60%;
  max-width: 800px;
  text-align: center;
  color: black;
}

.comparison-images {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.image-block {
  text-align: center;
}

.comparison-image {
  width: 150px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;
}

.comparison-image:hover {
  transform: scale(1.1);
}

.comparison-text {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
 
  25% {
    transform: scale(1); /* Pause après le battement */
  }
  35% { 
    transform: scale(1.1); /* Deuxième battement */
  }
  50% {
    transform: scale(1); /* Pause après le deuxième battement */
  }
  60% {
    transform: scale(1.1); /* Troisième battement */
  }
  75% {
    transform: scale(1); /* Pause après le troisième battement */
  }
  100% {
    transform: scale(1);
  }
}

.heart-beat {
  animation: heartBeat 2s ease-in-out infinite; /* Durée de l'animation ajustée */
}

</style>