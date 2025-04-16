<template>
  <div class="home">
    <span class="home__title text-xl">Joke Collection App</span>
    <div class="home__buttons flex flex-col mt-4">
      <span>Click to choose a joke to fetch</span>
      <div class="mt-4 flex gap-4">
        <button @click="fetchJoke('random')" class="btn bg-red-500 rounded">Random Joke</button>
        <button @click="fetchJoke('programming')" class="btn">Programming Joke</button>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="joke">{{ joke }}</div>
  </div>
</template>

<script setup>
import { useJokes } from '../api/jokes';

const { joke, loading, error, fetchJoke } = useJokes();


</script>

<style lang="scss" scoped>
.home {
}
</style>