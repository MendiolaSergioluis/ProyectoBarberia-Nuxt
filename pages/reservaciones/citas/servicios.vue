<script setup lang="ts">
import {useServicesStore} from "~/stores/services";

definePageMeta({
  name: 'servicios-cita',
})
useHead({
  title: 'Servicios Disponibles',
})
// TODO: Evaluar el Pasar el $fetch que carga los datos de los servicios al componente si solo se usa una vez en la web, para poder guardar la petición en cache con useFetch
const serviceStore = useServicesStore()
</script>

<template>
  <NuxtLayout name="reservaciones">
    <NuxtLayout name="citas">
      <h2 class="text-4xl font-extrabold text-white mt-10">Servicios</h2>
      <p class="text-white text-lg mt-5">A continuación elige al menos un servicio para tu cita</p>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <ServiceItem
            v-for="service in serviceStore.services"
            :key="service._id"
            :service="service"
        />
      </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style scoped>

</style>