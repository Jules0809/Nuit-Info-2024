<template>
    <div class="explore">
      <!-- Conteneur Flex pour aligner l'image et les cartes -->
      <div class="content">
        <!-- Image du corps humain -->
        <div class="image-container">
          <img src="../../Image/corp.png" alt="Image de corps humain" class="body-image" />
        </div>
  
        <!-- Cartes à droite -->
        <div class="cards-container">
          <div v-for="(card, index) in cards" :key="index" class="card" @click="showCard(index)">
            <h3>{{ card.title }}</h3>
            <p>{{ card.shortDescription }}</p>
          </div>
        </div>
      </div>
  
      <!-- Petite carte qui s'affiche lors d'un clic -->
      <div v-if="activeCard !== null" class="small-card">
        <div class="small-card-content">
          <h3>{{ cards[activeCard].title }}</h3>
          <p>{{ cards[activeCard].description }}</p>
          <button @click="closeSmallCard">Fermer</button>
        </div>
      </div>
    </div>
  </template>
  

  
  <script>
  export default {
    name: "Explore",
    data() {
      return {
        // Liste des cartes avec titre, description courte et description complète
        cards: [
          {
            title: "Système circulatoire",
            shortDescription: "Le cœur et les vaisseaux sanguins.",
            description: "Le système circulatoire transporte le sang, les nutriments et l'oxygène à travers tout le corps. Il joue un rôle crucial dans le maintien de l'équilibre interne."
          },
          {
            title: "Système respiratoire",
            shortDescription: "Les poumons et la respiration.",
            description: "Le système respiratoire permet l'échange des gaz, permettant à l'oxygène de pénétrer dans le sang et au dioxyde de carbone d'être expulsé du corps."
          },
          {
            title: "Système nerveux",
            shortDescription: "Le cerveau et les nerfs.",
            description: "Le système nerveux coordonne les actions du corps et transmet les signaux entre le cerveau et les différentes parties du corps."
          }
        ],
        activeCard: null, // Index de la carte active
      };
    },
    methods: {
      showCard(index) {
        this.activeCard = index; // Afficher la petite carte avec les détails
      },
      closeSmallCard() {
        this.activeCard = null; // Fermer la petite carte
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
    width: 100%;
    height: 100vh;
    object-fit: cover;
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
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .small-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    width: 300px;
    z-index: 10;
  }
  
  .small-card-content h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }
  
  .small-card-content p {
    font-size: 16px;
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
  </style>
  