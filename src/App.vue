<template>
  <div id="app">
    <!-- Afficher le Header seulement si la route actuelle n'est pas la page d'accueil -->
    <Header v-if="!isHomePage" /> <!-- Affichage conditionnel basé sur la route -->
    
    <main>
      <router-view /> <!-- Affiche le contenu dynamique selon la route -->
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    // Vérifie si la route actuelle est la page d'accueil
    isHomePage() {
      // Remplacez 'home' par le nom exact de votre route d'accueil si nécessaire
      return this.$route.name === 'home';
    }
  }
};
</script>

<style>
/* Styles globaux */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: linear-gradient(135deg, #6e7e85, #314e56); /* Fond moderne avec un dégradé */
  color: #fff;
}

main {
  padding: 0px;
  min-height: 80vh;
}
</style>
