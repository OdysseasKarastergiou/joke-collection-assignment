<template>
  <button
    :class="[
      'px-4 py-2 text-black font-semibold transition duration-300',
      colorClasses,
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "blue",
  },
});

const colorClasses = computed(() => {
  const colors = {
    blue: "bg-blue-200 hover:bg-blue-600 hover:text-white",
    red: "bg-red-600 hover:bg-red-800",
    green: "bg-green-200 hover:bg-green-600 hover:text-white",
    gray: "bg-gray-600 hover:bg-gray-800",
    indigo: "bg-indigo-400 hover:bg-indigo-600",
  };

  return colors[props.color] || colors.blue;
});
</script>
