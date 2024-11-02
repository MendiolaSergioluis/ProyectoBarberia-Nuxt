<script setup lang="ts">
</script>

<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3 bg-hero">
    </div>
    <div class="md:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
      <slot/>
    </div>
  </div>
</template>

<style scoped></style>
