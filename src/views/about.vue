<template>
    <div class="about">
      <!-- Header -->
      <header>
        <h1>À Propos</h1>
        <p>Découvrez Race for Water et son engagement pour la préservation des océans.</p>
      </header>
      <br><br>
      <!-- Contenu principal -->
      <section class="about-content">
        <div class="about-text">
          <h2>Race for Water</h2>
          <p>
            <strong>Race for Water</strong> est une organisation à but non lucratif dédiée à la lutte contre la pollution des océans, notamment la pollution plastique. 
            Fondée en 2010, elle mène des expéditions scientifiques et de sensibilisation à bord d'un navire fonctionnant grâce aux énergies renouvelables : solaire, éolien et hydrogène.
          </p>
          <p>
            L'association met l'accent sur l'innovation durable, la réduction des plastiques à usage unique et la transformation des déchets plastiques en ressources. 
            Elle encourage également la transition énergétique et soutient des solutions circulaires pour un avenir meilleur.
          </p>
          <p>
            Ensemble, nous pouvons agir pour protéger nos océans et assurer un équilibre durable entre l'homme et la nature.
          </p>
        </div>
        <div class="about-image">
          <img src="../../Image/logo_entreprise.png" alt="Race for Water Logo" />
        </div>
      </section>
  
      <!-- Réseaux sociaux -->
      <section class="social-links">
        <h2>Suivez-nous</h2>
        <div class="social-icons">
          <a href="https://www.youtube.com/c/raceforwaterfoundation" target="_blank" rel="noopener noreferrer">
            <img src="../../Image/youtube-icon.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/company/race-for-water-foundation/?originalSubdomain=ch" target="_blank" rel="noopener noreferrer">
            <img src="../../Image/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/raceforwaterfoundation/" target="_blank" rel="noopener noreferrer">
            <img src="../../Image/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/raceforwater/" target="_blank" rel="noopener noreferrer">
            <img src="../../Image/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://x.com/RaceForWater" target="_blank" rel="noopener noreferrer">
            <img src="../../Image/twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </section>
      <br><br><br>
      <!-- Footer -->
      <!-- <footer>
        <p>&copy; 2024 Race for Water. Tous droits réservés. | Préservons nos océans, ensemble.</p>
      </footer> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>
  /* Général */
  .about {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, #1d3557, #87ceeb); /* Océan vers ciel */
    color: #f1faee;
    text-align: center;
    padding: 20px;
    overflow-x: hidden;
  }
  
  /* Header */
  header {
    padding: 40px 20px;
    background: linear-gradient(to right, #264653, #457b9d);
    color: #f1faee;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
  }
  
  header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  header p {
    font-size: 1.3rem;
  }
  
  /* Contenu principal */
  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    background: #2a5470;
    color: #f1faee;
    margin: 20px auto;
    border-radius: 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    width: 80%;
  }
  
  .about-text {
    text-align: justify;
    margin-right: 30px;
  }
  
  .about-text h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .about-text p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .about-image img {
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  /* Réseaux sociaux */
  .social-links {
    margin-top: 40px;
  }
  
  .social-links h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .social-icons a img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .social-icons a img:hover {
    transform: scale(1.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* Footer */
  footer {
    background: linear-gradient(to right, #1d3557, #264653);
    color: white;
    padding: 20px;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
  }
  </style>
  