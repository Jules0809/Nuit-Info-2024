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
};
</script>

<style scoped>
/* Général */
.home {
  font-family: 'Poppins', sans-serif;
  background-color: #f9fbfd;
  color: #34495e;
}

/* Header comme avant */
header {
  background-color: #1abc9c;
  color: white;
  padding: 70px 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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

/* Sections */
.intro, .intro2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  background-color: white;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.intro-image img, .intro-image2 img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
}

.intro-image img:hover, .intro-image2 img:hover {
  transform: scale(1.05);
}

.intro-text h2 {
  font-size: 2rem;
  color: #2c3e50;
}

.intro-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: #7f8c8d;
}

/* Footer */
footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideInLeft {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
</style>
