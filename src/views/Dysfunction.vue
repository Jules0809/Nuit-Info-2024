<template class="dysfunction1">
    <div class="main-container">
      <!-- Header section with modern design -->
      <header class="header-container">
        <h1 class="main-title">Dysfonctionnements des systèmes</h1>
        <p class="intro-text">Découvrez les conséquences des dysfonctionnements dans les systèmes humains et océaniques.</p>
        <p class="comparison-text">
          Lorsque le système circulatoire humain est défaillant, cela peut entraîner des problèmes tels que l'hypertension, tout comme un courant marin défaillant perturbe l'écosystème marin.
        </p>
      </header>
  
      <!-- Image Section -->
      <div class="illustration-container">
        <img src="../../Image/dis.jpg" alt="Illustration des parallèles entre humains et océans" />
      </div>
  
      <!-- Dysfunctions List Section -->
      <section id="dysfunctions" class="dysfunction-section">
        <h2 class="section-title">Dysfonctionnements des systèmes</h2>
        <p class="section-description">Voici comment les défaillances dans les systèmes humains et océaniques peuvent affecter l'équilibre :</p>
  
        <!-- Grid Container for Dysfunction List -->
        <div class="grid-container">
          <div v-for="(item, index) in dysfunctions" :key="index" class="dysfunction-card">
            <h3 class="dysfunction-title">{{ item.title }}</h3>
            <p class="dysfunction-description">{{ item.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Button -->
      <!-- <div class="cta-container">
        <a href="#learn-more" class="cta-button">En savoir plus</a>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dysfunction',
    data() {
      return {
        dysfunctions: [
          {
            title: 'Système circulatoire vs Courants marins',
            description: 'Une insuffisance circulatoire humaine, comme l\'hypertension, affecte les organes. De même, des courants marins perturbés déséquilibrent le climat et les écosystèmes.'
          },
          {
            title: 'Système respiratoire vs Oxygénation des océans',
            description: 'Les maladies pulmonaires limitent l\'échange d\'oxygène. Les zones mortes océaniques, causées par l\'acidification, privent la vie marine de l\'oxygène nécessaire.'
          },
          {
            title: 'Système immunitaire vs Résilience écologique',
            description: 'Un système immunitaire affaibli rend l\'organisme vulnérable. La pollution marine affaiblit les océans, rendant les écosystèmes sensibles aux crises comme le blanchissement des coraux.'
          },
          {
            title: 'Système digestif vs Chaîne alimentaire marine',
            description: 'Les troubles digestifs nuisent à l\'absorption des nutriments. La surpêche épuise les stocks essentiels à la survie des espèces marines.'
          },
          {
            title: 'Système nerveux vs Signaux océaniques',
            description: 'Les troubles neurologiques perturbent les fonctions corporelles. Les changements de température désorientent les migrations des espèces marines.'
          },
          // Ajout de nouveaux dysfonctionnements
          {
            title: 'Système cardiovasculaire vs Température de l\'océan',
            description: 'Les maladies cardiovasculaires rendent difficile la gestion de la pression artérielle et du flux sanguin. Des changements brusques de température dans les océans peuvent perturber les écosystèmes marins et affecter les espèces sensibles au climat.'
          },
          {
            title: 'Système endocrinien vs Pollution chimique des océans',
            description: 'Les perturbations hormonales peuvent affecter la reproduction et la croissance corporelle. La pollution chimique, en particulier les plastiques et les métaux lourds, perturbe la chaîne alimentaire marine et les organismes marins.'
          },
          {
            title: 'Système musculaire vs Courants marins violents',
            description: 'Les troubles musculaires peuvent limiter la mobilité et l\'endurance. Les courants marins trop forts ou imprévisibles peuvent perturber les routes migratoires des animaux marins et affecter les écosystèmes côtiers.'
          },
          {
            title: 'Système rénal vs Pollution thermique',
            description: 'Les maladies rénales affectent la capacité du corps à réguler l\'équilibre hydrique. L\'augmentation des températures marines en raison du réchauffement climatique impacte les habitats marins et les poissons qui dépendent d\'une température stable pour survivre.'
          },
          {
            title: 'Système nerveux central vs Acidification des océans',
            description: 'Les troubles du système nerveux central affectent la cognition et les réponses nerveuses. L\'acidification des océans déstabilise les écosystèmes marins et affecte les espèces sensibles au pH de l\'eau.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Main container for the page */
  .main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #f5f7fa;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Header Styling */
  .header-container {
    text-align: center;
    animation: slideInDown 1s ease-out;
  }
  
  .main-title {
    font-size: 3em;
    color: #e74c3c;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  .intro-text {
    font-size: 1.3em;
    color: #555;
  }
  
  .comparison-text {
    font-size: 1.2em;
    color: #333;
    margin-top: 20px;
  }
  
  /* Illustration Section */
  .illustration-container {
    text-align: center;
    margin: 40px 0;
    opacity: 0;
    animation: fadeInUp 2s ease-in-out forwards;
  }
  
  .illustration-container img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Dysfunction Section */
  .dysfunction-section {
    margin-top: 60px;
  }
  
  .section-title {
    font-size: 2.5em;
    color: #003366;
    text-align: center;
    margin-bottom: 20px;
    animation: fadeInUp 1.5s ease-in-out;
  }
  
  .section-description {
    font-size: 1.2em;
    color: #777;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    animation: fadeInUp 2s ease-in-out forwards;
  }
  
  .dysfunction-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .dysfunction-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  .dysfunction-title {
    font-size: 1.5em;
    color: #003366;
    margin-bottom: 15px;
  }
  
  .dysfunction-description {
    font-size: 1.1em;
    color: #555;
    line-height: 1.6;
  }
  
  /* Call to Action Button */
  .cta-container {
    text-align: center;
    margin-top: 40px;
  }
  
  .cta-button {
    background-color: #003366;
    color: white;
    padding: 15px 30px;
    font-size: 1.5em;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .cta-button:hover {
    transform: scale(1.1);
    background-color: #00509e;
  }
  
  /* Animations */
  @keyframes slideInDown {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
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
  </style>
  