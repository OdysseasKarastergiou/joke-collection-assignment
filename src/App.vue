<script setup></script>

<template>
  <div>
    <nav class="bg-transparent text-sm flex justify-center p-4 gap-8">
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
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4f46e5;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 50%;
}

.router-link-active::after {
  width: 100%;
}
</style>
