<template>
  <div class="flex flex-col items-center">
    <div class="flex space-x-1">
      <span
        v-for="star in stars"
        :key="star"
        @click="rate(star)"
        @mouseover="hover = star"
        @mouseleave="hover = 0"
        class="cursor-pointer text-2xl"
      >
        <span
          :class="star <= (hover || modelValue) ? 'text-yellow-400' : 'text-gray-300'"
        >
          <font-awesome-icon :icon="['fas', 'star']" />
        </span>
      </span>
    </div>
    <span class="text-black mt-2">{{ rateMessage }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
});
const emit = defineEmits(["update:modelValue"]);

const hover = ref(0);

const rateMessage = ref("");

const stars = computed(() =>
  Array.from({ length: props.maxStars }, (_, i) => i + 1)
);

const rate = (value) => {
  emit("update:modelValue", value);
  rateMessage.value = `You rated with ${value} star(s)`;
};
</script>

<style scoped></style>
