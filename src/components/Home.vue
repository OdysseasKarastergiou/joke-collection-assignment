<template>
  <div class="home">
    <span class="home__title text-xl">Joke Collection App</span>
    <div class="home__buttons flex flex-col my-8">
      <span>Click to choose a joke to fetch</span>
      <div class="mt-4 flex gap-4">
        <JokeButton color="green" @click="fetchJoke('random')">Random Joke</JokeButton>
        <JokeButton @click="fetchJoke('programming')" class="btn">Programming Joke</JokeButton>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <JokeCard v-if="joke" :joke="joke" />
  </div>
</template>

<script setup>
import { useJokes } from '../api/jokes';
import JokeButton from './JokeButton.vue';
import JokeCard from './JokeCard.vue';

const { joke, loading, error, fetchJoke } = useJokes();


</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>