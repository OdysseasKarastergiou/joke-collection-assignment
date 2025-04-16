<template>
    <div class="p-6">
      <h2 class="text-xl mb-4">Your Joke Collection in local storage</h2>
      <div v-if="jokes.length === 0">No jokes saved yet.</div>
      <div v-for="joke in jokes" :key="joke.id" class="mb-4">
        <JokeCard :joke="joke" />
        <JokeButton color="red" @click="removeJoke(joke.id)" class="mt-4">Remove</JokeButton>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import JokeCard from './JokeCard.vue';
  import JokeButton from './JokeButton.vue';
  
  const jokes = ref([]);
  
  function loadJokes() {
    jokes.value = JSON.parse(localStorage.getItem('jokes') || '[]');
  }

  onMounted(loadJokes);
  
  function removeJoke(id) {
    jokes.value = jokes.value.filter(j => j.id !== id);
    localStorage.setItem('jokes', JSON.stringify(jokes.value));
  }
  </script>
  