<script setup></script>

<template>
  <div>
    <nav class="bg-transparent text-sm flex justify-center p-4 gap-4">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/collection" class="nav-link">My Collection</RouterLink>
    </nav>
    <Transition name="scale" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.scale-enter-from {
  transform: scale(0.7);
  opacity: 0;
}

.scale-leave-to {
  transform: scale(1.2);
  opacity: 0;
}

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
