<script setup lang="ts">
import {useServicesStore} from "~/stores/services";
import type {TService} from "~/types";
import userFetchWithCache from "~/composables/userFetchWithCache";

definePageMeta({
  name: 'servicios-cita',
})
useHead({
  title: 'Servicios Disponibles',
})
const serviceStore = useServicesStore()
try {
  const data = await userFetchWithCache<TService[]>('/api/services')
  serviceStore.setData(data) // Ignora el error, useFetch no funciona con pinia
} catch (error) {
  console.log(error)
}
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