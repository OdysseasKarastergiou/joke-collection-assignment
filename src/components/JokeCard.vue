<template>
    <div class="card border p-6 rounded-xl bg-white transition-transform hover:scale-110">
      <p class="text-xl font-semibold text-gray-800">{{ joke.setup }}</p>
      <JokeButton 
        @click="revealed = !revealed" 
        class="mt-4">
        {{ revealed ? joke.punchline : 'Reveal punchline' }}
      </JokeButton>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import JokeButton from './JokeButton.vue';
  defineProps(['joke']);
  const revealed = ref(false);
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  