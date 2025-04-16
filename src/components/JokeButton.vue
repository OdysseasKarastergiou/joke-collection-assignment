<template>
    <button
      :class="[
        'px-4 py-2 rounded text-white font-semibold transition',
        colorClasses
      ]"
    >
      <slot />
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'

  const props = defineProps({
    color: {
      type: String,
      default: 'blue'
    }
  })

  const colorClasses = computed(() => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      red: 'bg-red-600 hover:bg-red-700',
      green: 'bg-green-600 hover:bg-green-700',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      gray: 'bg-gray-600 hover:bg-gray-700'
    }
  
    return colors[props.color] || colors.blue
  })
  </script>
  