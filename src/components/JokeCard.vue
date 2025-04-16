<template>
    <div class="card border p-6 rounded-xl bg-white transition-transform hover:scale-110">
      <p class="text-xl font-semibold text-gray-800">{{ joke.setup }}</p>
      <transition name="fade" mode="out-in">
      <JokeButton
        v-if="!revealed"
        @click="revealed = true"
        key="button"
        class="mt-4"
      >
        Reveal punchline
      </JokeButton>
      <span
        v-else
        key="punchline"
        class="block cursor-pointer mt-4 text-lg text-green-700 hover:bg-green-100 font-medium animate-fade-in"
        @click="revealed = false"
      >
        {{ joke.punchline }}
      </span>
    </transition>
    <StarRating class="mt-4" v-model="rating" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import JokeButton from './JokeButton.vue';
  import StarRating from './StarRating.vue';
  const { joke } = defineProps(['joke']);
  const revealed = ref(false)
  const rating = ref(joke.rating || 0);
  watch(rating, (newRating) => {
    joke.rating = newRating;
  });

  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }
  </style>
  