<script setup>
</script>

<template>
<div>
  <nav class="bg-transparent flex justify-center p-4 flex gap-4">
      <RouterLink to="/" class="text-blue-600">Home</RouterLink>
      <RouterLink to="/collection" class="text-blue-600">My Collection</RouterLink>
    </nav>
    <RouterView />
</div>
</template>

<style scoped>
</style>
