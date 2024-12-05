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

    <!-- Popup pour la comparaison du système respiratoire -->
    <div v-if="showComparison" class="comparison-modal">
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
        <button @click="closeComparison">Fermer</button>
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
      showComparison: false // Contrôle l'affichage de la comparaison
    };
  },
  methods: {
    handleCardClick(index) {
      if (this.cards[index].title === "Système respiratoire") {
        this.showComparison = true;
      }
    },
    closeComparison() {
      this.showComparison = false;
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
</style>