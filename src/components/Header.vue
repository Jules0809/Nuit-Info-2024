<template>
  <header class="header">
    <nav>
      <div class="logo">
        <router-link to="/" class="logo-link">Voyage interactif</router-link>
      </div>
      <ul :class="{ 'menu-active': menuOpen }" class="nav-list">
        <li><router-link to="/" class="nav-item">Accueil</router-link></li>
        <li><router-link to="/explore" class="nav-item">Explorer</router-link></li>
        <li><router-link to="/dysfunction" class="nav-item">Dysfonctionnements</router-link></li>
        <li><router-link to="/Benefits" class="nav-item">Bienfaits</router-link></li>
        <li><router-link to="/about" class="nav-item">À propos</router-link></li>
      </ul>
      <div class="menu-toggle" @click="toggleMenu">
        <span :class="{ 'rotate-down': menuOpen }" class="bar"></span>
        <span :class="{ 'hidden': menuOpen }" class="bar"></span>
        <span :class="{ 'rotate-up': menuOpen }" class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Styles globaux pour l'en-tête */
header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 30px;
  /*position: fixed;*/
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
}

.nav-item {
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-item:hover {
  background-color: #3498db;
  color: #fff;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle .bar {
  width: 30px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  transition: 0.3s;
}

.rotate-down {
  transform: rotate(45deg);
  transform-origin: center;
}

.rotate-up {
  transform: rotate(-45deg);
  transform-origin: center;
}

.hidden {
  opacity: 0;
  transform: scale(0.5);
}

/* Responsiveness */
@media (max-width: 768px) {
  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 30px;
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .menu-active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-item {
    font-size: 16px;
    padding: 12px 20px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .logo-link {
    font-size: 1.5rem;
  }
}
</style>
