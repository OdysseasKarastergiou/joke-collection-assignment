<template>
  <div class="home">
    <span class="home__title text-4xl">Joke Collection App</span>
    <div class="home__buttons flex flex-col my-8">
      <div class="text-sm sm:text-base mt-4 flex gap-4">
        <JokeButton
          :disabled="loading"
          :color="loading ? 'gray' : 'green'"
          @click="fetchJoke('random')"
        >
          Random Joke
        </JokeButton>
        <JokeButton
          :disabled="loading"
          :color="loading ? 'gray' : 'blue'"
          @click="fetchJoke('programming')"
          class="btn"
        >
          Programming Joke
        </JokeButton>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <JokeCard v-if="joke" :joke="joke" />
    <JokeButton
      color="indigo"
      v-if="joke"
      @click="saveJoke(joke)"
      class="btn mt-4"
      >Save to Collection</JokeButton
    >
  </div>
</template>

<script setup>
import { useJokes } from "../api/jokes";
import JokeButton from "./common/JokeButton.vue";
import JokeCard from "./JokeCard.vue";

const { joke, loading, error, fetchJoke } = useJokes();

function saveJoke(joke) {
  let collection = JSON.parse(localStorage.getItem("jokes") || "[]");
  if (!collection.find((j) => j.id === joke.id)) {
    collection.push(joke);
    localStorage.setItem("jokes", JSON.stringify(collection));
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
