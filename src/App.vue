<script setup>
</script>

<template>
  <div>
    <nav class="bg-transparent text-sm flex justify-center p-4 gap-4">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/collection" class="nav-link">My Collection</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.nav-link {
  color: #1e3a8a;
  font-weight: 500;
  transition: all 0.2s ease;
}

.router-link-active {
  font-weight: 700;
  transform: scale(1.1);
  color: #2563eb;
}
</style>
