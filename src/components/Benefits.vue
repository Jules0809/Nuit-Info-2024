<template class="benefits1">
    <div class="main-container">
      <!-- Header section with modern design -->
      <header class="header-container">
        <h1 class="main-title">Bénéfices des systèmes</h1>
        <p class="intro-text">Découvrez les bienfaits que l'équilibre des systèmes humains et océaniques peut apporter à la planète et à l'humanité.</p>
        <p class="comparison-text">
          Tout comme un système circulatoire sain garantit la bonne fonction du corps, des écosystèmes océaniques équilibrés assurent la santé de notre planète.
        </p>
      </header>
  
      <!-- Image Section -->
      <div class="illustration-container">
        <img src="../../Image/dysfunction.png" alt="Illustration des bienfaits entre humains et océans" />
      </div>
  
      <!-- Benefits List Section -->
      <section id="benefits" class="benefit-section">
        <h2 class="section-title">Bénéfices des systèmes</h2>
        <p class="section-description">Voici comment l'équilibre dans les systèmes humains et océaniques améliore la santé de notre environnement :</p>
  
        <!-- Grid Container for Benefit List -->
        <div class="grid-container">
          <div v-for="(item, index) in benefits" :key="index" class="benefit-card">
            <h3 class="benefit-title">{{ item.title }}</h3>
            <p class="benefit-description">{{ item.description }}</p>
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
    name: 'Benefits',
    data() {
      return {
        benefits: [
          {
            title: 'Système circulatoire vs Circulation océanique',
            description: 'Un système circulatoire humain sain favorise un flux sanguin efficace. De même, une circulation océanique fluide régule le climat mondial et soutient une biodiversité marine riche.'
          },
          {
            title: 'Système respiratoire vs Régulation de l\'oxygène dans les océans',
            description: 'Une respiration efficace maintient un apport constant en oxygène pour l\'organisme. De même, des océans bien équilibrés fournissent l\'oxygène nécessaire à la vie marine et stabilisent le climat terrestre.'
          },
          {
            title: 'Système immunitaire vs Résilience des écosystèmes marins',
            description: 'Un système immunitaire robuste protège contre les maladies. Les écosystèmes océaniques résilients résistent aux menaces environnementales et contribuent à la régulation des conditions climatiques.'
          },
          {
            title: 'Système digestif vs Chaîne alimentaire marine saine',
            description: 'Un système digestif performant assure une absorption optimale des nutriments. De même, un équilibre dans la chaîne alimentaire marine soutient la biodiversité et permet aux espèces de prospérer.'
          },
          {
            title: 'Système nerveux vs Signalisation océanique efficace',
            description: 'Un système nerveux intact garantit des réponses corporelles adaptées. Des signaux océaniques précis, comme les courants marins, influencent les migrations et les comportements des espèces marines.'
          },
          // Ajout de nouveaux bénéfices
          {
            title: 'Système cardiovasculaire vs Température stable de l\'océan',
            description: 'Un système cardiovasculaire sain assure une bonne régulation du flux sanguin. Des températures océaniques stables permettent aux écosystèmes marins de s\'épanouir et soutiennent la biodiversité.'
          },
          {
            title: 'Système endocrinien vs Politiques de gestion marine durable',
            description: 'Des hormones équilibrées favorisent la santé et la croissance. La gestion durable des ressources marines aide à maintenir l\'équilibre écologique, soutenant la reproduction et la croissance des espèces marines.'
          },
          {
            title: 'Système musculaire vs Propriétés résilientes des habitats marins',
            description: 'Un système musculaire fort soutient les mouvements corporels. Des habitats marins en bonne santé, comme les récifs coralliens, fournissent des refuges et des ressources pour les espèces marines.'
          },
          {
            title: 'Système rénal vs Filtration naturelle des océans',
            description: 'Un système rénal fonctionnel assure l\'équilibre hydrique. Les océans jouent un rôle similaire en filtrant et en régulant l\'eau pour maintenir l\'équilibre écologique.'
          },
          {
            title: 'Système nerveux central vs Communication océanique inter-espèces',
            description: 'Un système nerveux central fonctionnel permet la coordination des fonctions corporelles. Les signaux marins, tels que les vibrations, facilitent la communication entre les espèces marines.'
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
    background-color: #eaf2f8;
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
    color: #27ae60;
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
  
  /* Benefits Section */
  .benefit-section {
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
  
  .benefit-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  .benefit-title {
    font-size: 1.5em;
    color: #003366;
    margin-bottom: 15px;
  }
  
  .benefit-description {
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
  