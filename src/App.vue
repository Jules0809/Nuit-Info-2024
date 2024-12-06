<template>
  <div id="app">
    <Header v-if="!isHomePage" /> 
    
    <main>
      <router-view /> 
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
    isHomePage() {
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
  background: linear-gradient(135deg, #6e7e85, #314e56);
  color: #fff;
}

main {
  padding: 0px;
  min-height: 80vh;
}
</style>
