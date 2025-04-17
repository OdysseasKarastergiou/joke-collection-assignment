<template>
  <div class="mb-4">
    <label for="search" class="mr-2">Search for a joke:</label>
    <input
      id="search"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Type here.."
      class="border rounded px-2 py-1 w-64"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
