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
    <div
      v-if="saveMessage"
      class="mt-4 border-blue-400 p-3 rounded bg-blue-400 text-white text-sm"
    >
      {{ saveMessage }}
    </div>
    <div
      v-if="saveError"
      class="mt-4 border-red-400 p-3 rounded bg-red-400 text-white text-sm"
    >
      {{ saveError }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useJokes } from "../api/jokes";
import JokeButton from "./common/JokeButton.vue";
import JokeCard from "./JokeCard.vue";

const { joke, loading, error, fetchJoke } = useJokes();

const saveMessage = ref("");
const saveError = ref("");

function saveJoke(joke) {
  if (!joke.rating || joke.rating === 0) {
    saveError.value = "You have to rate a joke before saving it to your collection.";
    setTimeout(() => (saveError.value = ""), 2000);
    return;
  }

  try {
    let collection = JSON.parse(localStorage.getItem("jokes") || "[]");
    if (!collection.find((j) => j.id === joke.id)) {
      collection.push(joke);
      console.log(joke.rating);
      localStorage.setItem("jokes", JSON.stringify(collection));
      saveMessage.value = "Joke has been added to your collection.";
      saveError.value = "";
      setTimeout(() => (saveMessage.value = ""), 2000);
    } else {
      saveError.value = "Joke is already in your collection.";
      setTimeout(() => (saveError.value = ""), 2000);
    }
  } catch (err) {
    saveError.value = "An error occurred while saving the joke.";
    console.error(err);
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
