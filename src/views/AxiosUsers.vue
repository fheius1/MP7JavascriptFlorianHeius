<template>
  <div class="users">
    <h1>Usuaris</h1>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Telefon: {{ user.phone }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (error) {
    console.error("Error al cargar los usuarios:", error)
  }
})
</script>

<style scoped>
.users {
  max-width: 1200px;
  margin: 0 auto;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  list-style-type: none;
  padding: 0;
}

.user-item {
  flex: 1 1 calc(25% - 1em);
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h2 {
  margin: 0;
}

p {
  margin: 0.5em 0;
}
</style>
