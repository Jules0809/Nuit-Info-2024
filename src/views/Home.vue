<template>
  <div class="home">
    <!-- Header avec bulles animées -->
    <header>
      <div class="bubble-container">
        <div v-for="n in 20" :key="n" class="bubble" :style="getRandomBubbleStyle()"></div>
      </div>
      <img src="../../Image/logo.png" alt="Logo" class="logo" />
      <div class="slogan">
        <h1>Bienvenue à Nuit Info 2024</h1>
        <p>Explorez les parallèles fascinants entre le corps humain et les océans, un voyage au cœur de la biologie et de l'écosystème marin !</p>
        <p>Rejoignez-nous pour une expérience immersive unique.</p>
        <router-link to="/explore" class="cta-button">Commencer l'Expérience</router-link>
      </div>
    </header>

    <!-- Section principale -->
    <section class="intro">
      <div class="intro-text">
        <h2>Un voyage entre les systèmes humains et océaniques</h2>
        <p>
          Plongez dans une expérience interactive qui vous permet d'explorer les parallèles fascinants entre les systèmes biologiques humains et les écosystèmes marins. Découvrez les connexions invisibles qui régissent notre monde.
        </p>
        <p>
          Apprenez à connaître les similitudes surprenantes entre les flux sanguins et les courants marins. Un voyage inoubliable vous attend !
        </p>
      </div>
      <div class="intro-image">
        <img src="../../Image/img_base.png" alt="Illustration" />
      </div>
    </section>

    <section class="intro2">
      <div class="intro-text">
        <h2>La Nuit de l'Info</h2>
        <p>
          La Nuit de l'Info est un événement où des étudiants en informatique se réunissent pour relever des défis de programmation en équipe. Pendant une nuit entière, les participants travaillent ensemble pour créer des solutions innovantes.
        </p>
        <p>
          Cet événement est une occasion unique de développer des compétences techniques tout en partageant des moments conviviaux avec d'autres passionnés de technologie.
        </p>
      </div>
      <div class="intro-image2">
        <img src="../../Image/nuit-info.png" alt="Illustration de la Nuit de l'Info" />
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
    getRandomBubbleStyle() {
      const randomSize = Math.random() * (25 - 10) + 10; // Taille aléatoire entre 10px et 25px
      const randomLeft = Math.random() * 100; // Position horizontale aléatoire
      const randomDelay = Math.random() * 5 + 2; // Délai d'animation aléatoire
      return {
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        left: `${randomLeft}%`,
        animationDuration: `${randomDelay}s`, // Variation de la vitesse de montée
      };
    }
  }
};
</script>

<style scoped>
/* Général */
.home {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #87ceeb, #1d3557); /* Ciel vers océan */
  color: #f1faee;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Header */
header {
  background: linear-gradient(to right, #1d3557, #457b9d);
  color: #f1faee;
  padding: 70px 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

/* Bulles animées */
.bubble-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.bubble {
  position: absolute;
  bottom: -50px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: bubble-rise 6s ease-in-out infinite;
  opacity: 0.7;
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

header .logo {
  max-width: 150px;
  margin-bottom: 20px;
  animation: bounce 1.5s ease-out infinite alternate;
  position: relative;
  z-index: 1;
}

.slogan {
  position: relative;
  z-index: 1;
}

.slogan h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  animation: fadeIn 1.5s ease-out;
}

.slogan p {
  font-size: 1.4rem;
  margin-top: 10px;
  animation: slideInRight 1.5s ease-out;
}

.cta-button {
  background: linear-gradient(to right, #1d3557, #2a9d8f);
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
  background: #264653;
  transform: scale(1.1);
}

/* Sections */
.intro, .intro2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  background: linear-gradient(145deg, #56b2e7, #2a5470); /* Reflet aquatique */
  color: #f1faee;
  margin: 20px auto;
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  width: 80%; /* Réduction de la largeur */
  transition: transform 0.3s ease;
}

.intro:hover, .intro2:hover {
  transform: scale(1.02);
}

.intro-text h2, .intro-text p {
  margin-bottom: 20px;
  text-align: justify;
}

.intro-image img, .intro-image2 img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.intro-image img:hover, .intro-image2 img:hover {
  transform: scale(1.05);
}

/* Footer */
footer {
  background: linear-gradient(to right, #1d3557, #264653);
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(20px);
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
</style>
