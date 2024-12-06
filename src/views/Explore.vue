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
        <h2>Comparaison : Poumons et Surface de l'Océan</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../Image/Poumon.png" alt="Poumons humains" class="comparison-image" />
            <p>
              Poumons : Organes vitaux chez les humains qui permettent l'absorption d'oxygène de l'air et l'expulsion de dioxyde de carbone.
            </p>
          </div>
          <div class="image-block">
            <img src="../../Image/surface.png" alt="Surface de l'océan" class="comparison-image" />
            <p>
              Surface de l'océan : Zone d'échange gazeux où l'oxygène est produit par le phytoplancton et diffusé dans l'atmosphère.
            </p>
          </div>
        </div>
        <p class="comparison-text">
          Les poumons et la surface de l'océan remplissent une fonction cruciale : ils produisent et régulent l'oxygène essentiel à la vie. Tandis que les poumons absorbent l'oxygène pour les humains, l'océan en génère une grande partie grâce aux organismes photosynthétiques.
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
            <img src="../../Image/Coeur.png" alt="Cœur humain" class="comparison-image heart-beat" />
            <p>Cœur : Organe qui pompe le sang à travers le corps.</p>
          </div>
          <div class="image-block">
            <img src="../../Image/Courant_marin.png" alt="Réseaux vasculaires" class="comparison-image" />
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
        <h2>Comparaison : Cerveau Humain et Profondeurs Abyssales</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../Image/Cerveau.png" alt="Cerveau humain" class="comparison-image" />
            <p>
              Cerveau : Organe complexe et central du système nerveux, responsable de la pensée, de la mémoire, et du traitement des informations.
            </p>
          </div>
          <div class="image-block">
            <img src="../../Image/Profondeur.png" alt="Profondeurs abyssales" class="comparison-image" />
            <p>
              Profondeurs abyssales : Régions les plus mystérieuses de l'océan, caractérisées par un environnement sombre, complexe, et en grande partie inexploré.
            </p>
          </div>
        </div>
        <p class="comparison-text">
          Le cerveau humain et les profondeurs abyssales partagent une similarité fascinante : tous deux restent en partie mystérieux et regorgent de connexions complexes. Le cerveau, comme les profondeurs océaniques, abrite un monde complexe et interconnecté, avec des zones encore peu explorées mais essentielles à la compréhension globale de la vie.
        </p>
        <button @click="closeNervousComparison">Fermer</button>
      </div>
    </div>


    <!-- Popup pour le système digestif -->
    <div v-if="showDigestiveComparison" class="comparison-modal">
      <div class="modal-content">
        <h2>Comparaison : Système Digestif et Courants de Remontée Océanique</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../Image/Digestif.png" alt="Estomac humain" class="comparison-image" />
            <p>
              Système Digestif : Ensemble d'organes qui décomposent les aliments pour extraire les nutriments nécessaires à l'organisme.
            </p>
          </div>
          <div class="image-block">
            <img src="../../Image/remonte.png" alt="Courants de remontée" class="comparison-image" />
            <p>
              Courants de remontée : Phénomène océanique qui ramène les nutriments des profondeurs vers la surface, nourrissant les écosystèmes marins.
            </p>
          </div>
        </div>
        <p class="comparison-text">
          Le système digestif et les courants de remontée océaniques partagent un rôle fondamental dans le cycle des nutriments. Tandis que le système digestif extrait et distribue les nutriments des aliments pour alimenter le corps, les courants de remontée transportent les nutriments des profondeurs marines vers la surface, soutenant la vie dans l'océan.
        </p>
        <button @click="closeDigestiveComparison">Fermer</button>
      </div>
    </div>

    <!-- Popup pour le système sanguin -->
    <div v-if="showBloodComparison" class="comparison-modal">
      <div class="modal-content">
        <h2>Comparaison : Veines et Fleuves</h2>
        <div class="comparison-images">
          <div class="image-block">
            <img src="../../Image/Veine.png" alt="Veines humaines" class="comparison-image" />
            <p>
              Veines : Vaisseaux sanguins qui transportent le sang désoxygéné des organes vers le cœur, assurant le retour et la circulation des éléments vitaux.
            </p>
          </div>
          <div class="image-block">
            <img src="../../Image/fleuve.png" alt="Fleuve" class="comparison-image" />
            <p>
              Fleuves : Cours d'eau qui acheminent l'eau et les nutriments depuis les terres vers les océans, soutenant la vie dans de nombreux écosystèmes.
            </p>
          </div>
        </div>
        <p class="comparison-text">
          Les veines et les fleuves remplissent des fonctions de transport essentielles. Tandis que les veines ramènent le sang au cœur pour maintenir la circulation et distribuer des éléments vitaux, les fleuves transportent l'eau et les nutriments, reliant les écosystèmes terrestres et marins.
        </p>
        <button @click="closeBloodComparison">Fermer</button>
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
        },
        {
          title: "Système sanguin",
          shortDescription: "Le sang et ses composants.",
          description: "Le système sanguin transporte l'oxygène, les nutriments et les déchets à travers le corps."
        }
        
      ],
      showRespiratoryComparison: false,
      showCirculatoryComparison: false,
      showNervousComparison: false,
      showDigestiveComparison: false,
      showBloodComparison: false
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
        case "Système sanguin":
          this.showBloodComparison = true; // Corrigé
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
    },
    closeBloodComparison() {
      this.showBloodComparison = false;
    }
    
  }
};
</script>

<style scoped>
/* Style de la page principale */
.explore {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  min-height: 100vh;
  position: relative; /* Pour positionner l'image de fond par rapport à ce conteneur */
}

/* Image de fond floue */
.explore::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../Image/fond.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(10px); /* Applique un flou sur l'image de fond */
  z-index: -1; /* Placer l'image de fond derrière le contenu */
}

/* Contenu */
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
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  /* Mettre au milieu de la page */
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.body-image:hover {
  transform: scale(1.05);
}

.cards-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  color: #333;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  background-color: #f0f8ff;
}

/* Style des popups */
.comparison-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease;
}

.modal-content {
  background: #ffffff;
  border-radius: 15px;
  padding: 40px;
  width: 70%;
  max-width: 900px;
  text-align: center;
  color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.5s ease;
}

.comparison-images {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.image-block {
  text-align: center;
  flex: 1;
  margin: 0 10px;
}

.comparison-image {
  width: 180px;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.comparison-image:hover {
  transform: scale(1.1);
}

.comparison-text {
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
  color: #555;
}

button {
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.heart-beat {
  animation: heartBeat 2s ease-in-out infinite;
}

</style>
