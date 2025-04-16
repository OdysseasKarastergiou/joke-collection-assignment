<template>
  <div class="p-6">
    <h2 class="text-xl mb-4">Your Joke Collection in local storage</h2>
    <div class="mb-4">
      <label for="rating-filter" class="mr-2">Filter by rating:</label>
      <select id="rating-filter" v-model="ratingFilter" class="border rounded p-2">
        <option value="">All</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
    <div v-if="filteredJokes.length === 0">No jokes saved yet.</div>
    <div v-for="joke in filteredJokes" :key="joke.id" class="mb-4">
      <JokeCard :joke="joke" />
      <JokeButton color="red" @click="removeJoke(joke.id)" class="mt-4">Remove</JokeButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import JokeCard from './JokeCard.vue';
import JokeButton from './JokeButton.vue';

const jokes = ref([]);
const ratingFilter = ref('');

function loadJokes() {
  jokes.value = JSON.parse(localStorage.getItem('jokes') || '[]');
}

onMounted(loadJokes);

const filteredJokes = computed(() => {
  if (ratingFilter.value === '') {
    return jokes.value;
  }
  return jokes.value.filter(joke => joke.rating === parseInt(ratingFilter.value));
});

function removeJoke(id) {
  jokes.value = jokes.value.filter(j => j.id !== id);
  localStorage.setItem('jokes', JSON.stringify(jokes.value));
}
</script>
