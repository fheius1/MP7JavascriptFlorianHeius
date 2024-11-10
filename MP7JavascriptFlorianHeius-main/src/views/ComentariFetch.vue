<template>
  <div class="comments">
    <h1>Comentaris</h1>
    <ul class="comment-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <h2>{{ comment.name }}</h2>
        <p>Email: {{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const comments = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    comments.value = data
  } catch (error) {
    console.error("Error al carregar comentaris:", error)
  }
})
</script>

<style scoped>
.comments {
  max-width: max-content;
  margin: 0 auto;
}

.comment-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  list-style-type: none;
  padding: 0;
}

.comment-item {
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
