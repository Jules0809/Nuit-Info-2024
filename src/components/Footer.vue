<template>
    <footer class="animated-footer">
      <p class="fade-in">
        &copy; 2024 Nuit Info. Tous droits réservés. | Conçu pour éveiller la curiosité scientifique et l'exploration !
        <br />
        <router-link to="/mention" class="legal-link">Mentions légales</router-link> <!-- Lien vers les Mentions légales -->
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  /* Footer Styles */
  .animated-footer {
    background: linear-gradient(to right, #264653, #457b9d); /* Dégradé moderne */
    color: #f1faee;
    text-align: center;
    padding: 20px 15px;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Texte */
  .animated-footer p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
    opacity: 0; /* Initial pour animation */
    transform: translateY(20px);
    animation: fadeUp 1.2s ease-out forwards;
  }
  
  /* Animation de montée et opacité */
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Ajout d'animations décoratives */
  .animated-footer::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 150%;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    animation: wave 6s linear infinite;
  }
  
  .animated-footer::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: 0;
    width: 150%;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg);
    animation: wave 6s linear infinite;
  }
  
  /* Animation de mouvement des bandes lumineuses */
  @keyframes wave {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
  
  /* Style pour le lien des Mentions légales */
  .legal-link {
    color: #f1faee;
    text-decoration: none;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .legal-link:hover {
    text-decoration: underline;
  }
  </style>
  