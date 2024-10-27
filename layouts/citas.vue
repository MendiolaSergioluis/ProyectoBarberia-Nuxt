<script setup lang="ts">

</script>

<template>
  <nav class="my-5 flex gap-3">
    <NuxtLink
        :to="{name: 'servicios-cita'}"
        class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white rounded-lg"
        :class="$route.name === 'servicios-cita' ? 'bg-blue-600 text-white' : 'text-blue-500 bg-white'"
    >Servicios
    </NuxtLink>
    <NuxtLink
        :to="{name: 'detalles-cita'}"
        class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white rounded-lg"
        :class="$route.name === 'detalles-cita' ? 'bg-blue-600 text-white' : 'text-blue-500 bg-white'"
    >Cita y Resumen
    </NuxtLink>
  </nav>
  <slot/>
</template>

<style scoped>

</style>