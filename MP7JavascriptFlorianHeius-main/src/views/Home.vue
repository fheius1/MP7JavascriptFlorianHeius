<template>
  <div class="home">
    <h1>Projecte JavaScript amb Vue</h1>
    <p>Una aplicació web utilitzant JavaScript amb el framework Vue.js (SPA).</p>

    <div class="project-description">
      <h2>Descripció del projecte</h2>
      <p>
        Aquesta aplicació web està creada amb el framework Vue.js com una Single Page Application (SPA), utilitzant JavaScript per a gestionar les diferents funcionalitats. L'aplicació consisteix en les següents pàgines:
      </p>

      <ul>
        <li>
          <strong>Pàgina de la Calculadora</strong>: Una calculadora interactiva amb botons per als números i operacions (suma, resta, multiplicació, divisió). Es contempla la capacitat d'utilitzar decimals i també la funcionalitat per borrar el contingut de la pantalla.
        </li>
        <li>
          <strong>Pàgina de Comentaris</strong>: Utilitza l'API de <a href="https://jsonplaceholder.typicode.com/comments" target="_blank" rel="noopener noreferrer">jsonplaceholder.typicode.com</a> per mostrar els comentaris de l'usuari.
        </li>
        <li>
          <strong>Pàgina d'Usuaris</strong>: Utilitza l'API de <a href="https://dummyjson.com/users" target="_blank" rel="noopener noreferrer">dummyjson.com</a> per mostrar una llista d'usuaris amb la seva informació (nom, email, telèfon, etc).
        </li>
      </ul>
      <div class="image-container">
        <img src="/src/assets/imatge.jpg" alt="Imatge" />
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   name: 'Home'
// }
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2em;
  background-color: #8131ff;
  color: white;
}

.project-description {
  margin-top: 2em;
  font-size: 1.1em;
}

.project-description h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.project-description ul {
  list-style-type: none;
  padding: 0;
}

.project-description li {
  margin-bottom: 1em;
}

.project-description a {
  color: #fff;
  text-decoration: none;
}

.project-description a:hover {
  text-decoration: underline;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
