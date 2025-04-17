<template>
  <div
    class="card border p-6 rounded-2xl bg-white hover:scale-[1.1] transition-all duration-300"
    :class="{
      'border-4 border-green-400': joke.type === 'general',
      'border-4 border-blue-400': joke.type === 'programming',
    }"
  >
    <p class="text-xl font-semibold text-gray-800">{{ joke.setup }}</p>
    <transition name="fade" mode="out-in">
      <JokeButton
        v-if="!revealed"
        @click="revealed = true"
        key="button"
        class="mt-4"
        :color="joke.type === 'general' ? 'green' : 'blue'"
      >
        Reveal punchline
      </JokeButton>
      <span
        v-else
        key="punchline"
        class="block cursor-pointer mt-4 text-lg text-black italic hover:scale-[1.1] transition-all duration-300 font-medium animate-fade-in"
        @click="revealed = false"
      >
        {{ joke.punchline }}
      </span>
    </transition>
    <StarRating class="mt-4" v-model="rating" />
    <transition name="fade" mode="out-in">
      <span v-if="rating != 0" class="text-black mt-2">{{ rateMessage }}</span>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import JokeButton from "./common/JokeButton.vue";
import StarRating from "./common/StarRating.vue";

const { joke } = defineProps(["joke"]);
const revealed = ref(false);
const rating = ref(joke.rating || 0);
const rateMessage = ref("");

watch(
  () => joke,
  () => {
    revealed.value = false;
    rating.value = joke.rating || 0;
    rateMessage.value = "";
  },
  { immediate: true }
);

watch(rating, (newRating) => {
  joke.rating = newRating;
  rateMessage.value = `You rated with ${newRating} star(s)`;
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
