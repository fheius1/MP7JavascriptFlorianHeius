<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Inici</router-link>
      <router-link to="/calculator" class="nav-link">Calculadora</router-link>
      <router-link to="/comments" class="nav-link">Comentaris</router-link>
      <router-link to="/users" class="nav-link">Usuaris</router-link>
    </nav>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <p>Creat per: Florian Heius | fheius@iesebre.com | © {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:#8131ff;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #333;
  color: white;
  text-align: center;
  flex-wrap: wrap;
}

.navbar a,
.navbar .router-link {
  color: white;
  margin: 0 1em;
  text-decoration: none;
  font-size: 1.1rem;
}

.navbar a:hover,
.navbar .router-link:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 1em;
  background-color:#8131ff;
}

.footer {
  padding: 1em;
  background-color: #f1f1f1;
  text-align: center;
  border-top: 1px solid #ddd;
  color: #555;
  font-size: 1.1em;
  width: 100%;
  margin: 0;
  position: relative;
  bottom: 0;
}

/* Apartat per a ser responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar .router-link {
    margin: 0.5em 0;
    font-size: 1rem;
  }

  .footer p {
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  .navbar .router-link {
    font-size: 0.9rem;
  }

  .footer p {
    font-size: 0.7em;
  }
}
</style>
