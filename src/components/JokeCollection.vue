<template>
  <div class="p-6">
    <h2 class="text-xl mb-4">Your Joke Collection</h2>
    <div
      class="flex flex-col p-4 border border-amber-400 text-amber-400 rounded-xl shadow-sm mb-6 bg-black"
    >
      <span class="text-xl font-bold mb-2">Collection statistics</span>
      <span class="text-sm">Jokes Collected: {{ jokesCount }} </span>
      <span class="text-sm">Average Rating Given: {{ averageRating }}</span>
    </div>
    <div class="flex justify-between">
      <div class="mb-4">
        <label for="rating-filter" class="mr-2">Filter by rating:</label>
        <font-awesome-icon class="mr-2" :icon="['fas', 'filter']" />
        <select
          id="rating-filter"
          v-model="ratingFilter"
          class="border rounded"
        >
          <option value="">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <div class="flex gap-4">
        <span>Sort By:</span>
        <div class="flex cursor-pointer" @click="SortBy('rating')">
          <font-awesome-icon class="mr-1" :icon="['fas', 'sort-down']" />
          <span>Rating</span>
        </div>
        <div class="flex cursor-pointer" @click="SortBy('alphabetically')">
          <font-awesome-icon class="mr-1" :icon="['fas', 'sort-down']" />
          <span>Alphabetically</span>
        </div>
      </div>
    </div>
    <SearchBar v-model="searchQuery" />
    <div v-if="jokesCount === 0">No jokes saved yet.</div>
    <div v-for="joke in filteredJokes" :key="joke.id" class="mb-4">
      <JokeCard :joke="joke" />
      <JokeButton color="red" @click="removeJoke(joke.id)" class="mt-4"
        >Remove</JokeButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import JokeCard from "./JokeCard.vue";
import JokeButton from "./common/JokeButton.vue";
import SearchBar from "./common/SearchBar.vue";

const jokes = ref([]);
const ratingFilter = ref("");
const sortBy = ref(null);
const searchQuery = ref("");

function loadJokes() {
  jokes.value = JSON.parse(localStorage.getItem("jokes") || "[]");
}

onMounted(loadJokes);

const filteredJokes = computed(() => {
  let result = [...jokes.value];

  if (ratingFilter.value !== "") {
    result = result.filter(
      (joke) => joke.rating === parseInt(ratingFilter.value)
    );
  }

  if (searchQuery.value.trim() !== "") {
    const q = searchQuery.value.toLowerCase();
    result = result.filter((joke) => joke.setup?.toLowerCase().includes(q));
  }

  if (sortBy.value === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy.value === "alphabetically") {
    result.sort();
  }

  return result;
});

const jokesCount = computed(() => filteredJokes.value.length);

const averageRating = computed(() => {
  if (filteredJokes.value.length === 0) return "0";

  const total = filteredJokes.value.reduce(
    (sum, joke) => sum + (joke.rating || 0),
    0
  );
  const avg = total / filteredJokes.value.length;

  return avg.toFixed(1);
});

function removeJoke(id) {
  jokes.value = jokes.value.filter((j) => j.id !== id);
  localStorage.setItem("jokes", JSON.stringify(jokes.value));
}

function SortBy(type) {
  sortBy.value = type;
}
</script>
