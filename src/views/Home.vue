<template>
    <div class="home">
      <!-- Header avec un slogan -->
      <header>
          <img src="../../Image/logo.png" alt="Logo" class="logo" />
        <div class="slogan">
          <h1>Bienvenue à Nuit Info 2024</h1>
          <p>Explorez les parallèles fascinants entre le corps humain et les océans !</p>
          <router-link to="/explore" class="cta-button">Commencer</router-link>
        </div>
      </header>
  
      <!-- Section principale -->
      <section class="intro">
        <div class="intro-text">
          <h2>Un voyage entre les systèmes humains et océaniques</h2>
          <p>Plongez dans une expérience interactive qui vous permet d'explorer les parallèles fascinants entre les systèmes biologiques et les écosystèmes marins. Découvrez les connexions invisibles qui régissent notre monde.</p>
        </div>
        <div class="intro-image">
          <img src="https://via.placeholder.com/600x400" alt="Illustration" />
        </div>
      </section>
  
      <!-- Section d'exploration rapide -->
      <section class="explore-preview">
        <h2>Explorez les systèmes</h2>
        <div class="explore-cards">
          <div class="card" @click="goToExplore('circulatoire')">
            <h3>Système Circulatoire</h3>
            <p>Découvrez le cœur, les vaisseaux et leurs analogies marines.</p>
          </div>
          <div class="card" @click="goToExplore('respiratoire')">
            <h3>Système Respiratoire</h3>
            <p>Apprenez comment les poumons et les océans échangent des gaz.</p>
          </div>
          <div class="card" @click="goToExplore('nerveux')">
            <h3>Système Nerveux</h3>
            <p>Comprenez les connexions entre les nerfs et le réseau sous-marin.</p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer>
        <p>&copy; 2024 Nuit Info. Tous droits réservés.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    methods: {
      goToExplore(system) {
        this.$router.push({ name: 'explore', query: { system } });
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
  }
  
  /* Header */
  header {
    background-color: #3498db;
    color: white;
    padding: 20px;
    position: relative;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  
  .slogan {
    text-align: center;
    margin-top: 20px;
  }
  
  .slogan h1 {
    font-size: 2.5em;
  }
  
  .slogan p {
    font-size: 1.2em;
    margin-top: 10px;
  }
  
  .cta-button {
    background-color: #e67e22;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    display: inline-block;
  }
  
  .cta-button:hover {
    background-color: #d35400;
  }
  
  /* Section principale */
  .intro {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: #f4f4f4;
    align-items: center;
  }
  
  .intro-text {
    flex: 1;
  }
  
  .intro-text h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .intro-image img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
  
  /* Section d'exploration rapide */
  .explore-preview {
    padding: 40px;
    text-align: center;
  }
  
  .explore-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
  
  .card {
    background-color: white;
    width: 250px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .card h3 {
    font-size: 1.5em;
  }
  
  .card p {
    font-size: 1em;
  }
  
  /* Footer */
  footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 10px;
  }
  </style>
  