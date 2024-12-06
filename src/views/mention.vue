<template>
    <div class="legal">
      <!-- Header -->
      <header>
        <h1 class="fade-in">Mentions légales</h1>
      </header>
  
      <!-- Contenu principal -->
      <main>
        <section class="slide-in">
          <h2>Éditeur du site</h2>
          <p><strong>Race for Water Foundation</strong></p>
          <p>Adresse : Avenue de Provence 4, 1007 Lausanne, Suisse.</p>
          <p>E-mail : <a href="mailto:info@raceforwater.org">info@raceforwater.org</a></p>
        </section>
  
        <section class="slide-in delay-1">
          <h2>Responsable de la publication</h2>
          <p>Marco Simeoni, Président de la Fondation.</p>
        </section>
  
        <section class="slide-in delay-2">
          <h2>Hébergement</h2>
          <p><strong>JrCanDev</strong></p>
          <p>Adresse : IUTLCO Rue Louis David, 62100 Calais</p>
          <p>E-mail : <a href="mailto:remi.synave@univ-littoral.fr">remi.synave@univ-littoral.fr</a></p>
        </section>
  
        <section class="slide-in delay-3">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive 
            de la Race for Water Foundation ou de ses partenaires. Toute reproduction, représentation ou diffusion sans 
            autorisation préalable est interdite.
          </p>
        </section>
  
        <section class="slide-in delay-4">
          <h2>Responsabilité</h2>
          <p>
            La fondation s’efforce de fournir des informations exactes et à jour sur ce site, mais décline toute 
            responsabilité en cas d’erreur ou d’omission. Les liens hypertextes vers des sites tiers sont fournis à titre 
            informatif et ne constituent pas une approbation.
          </p>
        </section>
  
        <section class="slide-in delay-5">
          <h2>Contact</h2>
          <p>
            Pour toute question relative aux mentions légales ou pour signaler un problème sur le site, veuillez nous 
            contacter à l’adresse suivante : <a href="mailto:info@raceforwater.org">info@raceforwater.org</a>.
          </p>
        </section>
      </main>
  
      <!-- Footer -->
      <footer class="fade-in delay-6">
        <p>&copy; 2024 Race for Water. Tous droits réservés.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Legal",
  };
  </script>
  
  <style scoped>
  /* Général */
  .legal {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, #f1faee, #1d3557);
    color: #1d3557;
    text-align: center;
    padding: 20px;
    overflow-x: hidden;
  }
  
  /* Header */
  header {
    padding: 30px 20px;
    background: linear-gradient(to right, #264653, #457b9d);
    color: #f1faee;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
  }
  
  header h1 {
    font-size: 2.5rem;
  }
  
  /* Contenu principal */
  main {
    text-align: left;
    padding: 20px;
    background: #f1faee;
    color: #1d3557;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    width: 80%;
  }
  
  section {
    margin-bottom: 30px;
    opacity: 0; /* Initial pour animation */
    transform: translateY(20px);
  }
  
  section h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #264653;
  }
  
  section p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  a {
    color: #2a9d8f;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Footer */
  footer {
    background: linear-gradient(to right, #264653, #2a9d8f);
    color: white;
    padding: 20px;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
    opacity: 0; /* Initial pour animation */
  }
  
  /* Animations */
  .fade-in {
    animation: fadeIn 1s ease forwards;
  }
  
  .slide-in {
    animation: slideIn 1s ease forwards;
  }
  
  .delay-1 {
    animation-delay: 0.2s;
  }
  
  .delay-2 {
    animation-delay: 0.4s;
  }
  
  .delay-3 {
    animation-delay: 0.6s;
  }
  
  .delay-4 {
    animation-delay: 0.8s;
  }
  
  .delay-5 {
    animation-delay: 1s;
  }
  
  .delay-6 {
    animation-delay: 1.2s;
  }
  
  /* Animation Keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  