<template>
    <div class="home">
      <!-- Header avec un slogan -->
      <header>
        <img src="../../Image/logo.png" alt="Logo" class="logo" />
        <div class="slogan">
          <h1>Bienvenue à Nuit Info 2024</h1>
          <p>Explorez les parallèles fascinants entre le corps humain et les océans, un voyage au cœur de la biologie et de l'écosystème marin !</p>
          <router-link to="/explore" class="cta-button">Commencer l'Expérience</router-link>
        </div>
      </header>
  
      <!-- Section principale -->
      <section class="intro">
        <div class="intro-text">
          <h2>Un voyage entre les systèmes humains et océaniques</h2>
          <p>
            Plongez dans une expérience interactive qui vous permet d'explorer les parallèles fascinants entre les systèmes biologiques humains et les écosystèmes marins. Découvrez les connexions invisibles qui régissent notre monde et comment ces deux systèmes, bien que différents, s'entrelacent à travers des processus vitaux.
          </p>
          <p>
            Apprenez à connaître les similitudes surprenantes entre les flux sanguins et les courants marins, entre la respiration humaine et l'oxygénation des océans. Un voyage inoubliable vous attend !
          </p>
        </div>
        <div class="intro-image">
          <img src="../../Image/img_base.png" alt="Illustration" />
        </div>
      </section>
  
      <!-- Footer -->
      <footer>
        <p>&copy; 2024 Nuit Info. Tous droits réservés. | Conçu pour éveiller la curiosité scientifique et l'exploration !</p>
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
    font-family: 'Roboto', sans-serif;
    background-color: #f3f4f6;
    overflow-x: hidden;
  }
  
  /* Header */
  header {
    background-color: #1abc9c;
    color: white;
    padding: 70px 20px;
    position: relative;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 1s ease-out;
  }
  
  header .logo {
    max-width: 150px;
    margin-bottom: 20px;
    animation: bounce 1s ease-out infinite alternate;
  }
  
  .slogan h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    animation: slideInLeft 1.5s ease-out;
  }
  
  .slogan p {
    font-size: 1.4rem;
    margin-top: 10px;
    animation: fadeIn 1.5s ease-out;
  }
  
  .cta-button {
    background-color: #f39c12;
    color: white;
    padding: 18px 30px;
    border-radius: 30px;
    font-size: 1.3rem;
    margin-top: 30px;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #e67e22;
    transform: scale(1.1);
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  /* Section principale */
  .intro {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: #ecf0f1;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .intro-text {
    flex: 1;
  }
  
  .intro-text h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #34495e;
  }
  
  .intro-text p {
    font-size: 1.1rem;
    color: #7f8c8d;
    line-height: 1.8;
  }
  
  .intro-image img {
    width: 100%;
    max-width: 650px;
    border-radius: 15px;
    animation: fadeInUp 1.5s ease-out;
  }
  
  /* Section d'exploration rapide */
  .explore-preview {
    padding: 40px;
    text-align: center;
  }
  
  .explore-preview h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  .explore-preview p {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 40px;
    line-height: 1.7;
  }
  
  .explore-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    gap: 20px;
  }
  
  .card {
    background-color: white;
    width: 280px;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 2s ease-out;
  }
  
  .card:hover {
    transform: translateY(-15px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #34495e;
  }
  
  .card p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }
  
  /* Footer */
  footer {
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
  }
  
  footer p {
    font-size: 1rem;
  }
  </style>
  