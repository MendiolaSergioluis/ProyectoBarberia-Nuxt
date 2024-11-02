<script setup lang="ts">
import {useAppointmentsStore} from "~/stores/appointments";
import SelectedService from "~/components/SelectedService.vue";

definePageMeta({
  name: 'detalles-cita'
})
useHead({
  title: 'Detalles de la Cita',
})
const date = ref(new Date())
const appointments = useAppointmentsStore()
</script>

<template>
  <NuxtLayout name="reservaciones">
    <NuxtLayout name="citas">
      <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>
      <p class="text-white text-lg">A continuación verifica la información y confirma tu cita</p>

      <h3 class="text-3xl font-extrabold text-white">Servicios</h3>

      <p v-if="appointments.noServiceSelected"
         class="text-white text-2xl text-center"
      >No hay servicios seleccionados</p>

      <div v-else class="grid gap-5">
        <SelectedService
            v-for="service in appointments.services"
            :key="service._id as string"
            :service="service"
        />

        <p class="text-right text-white text-2xl">
          Total a pagar:
          <span class="font-black">{{ formatCurrency(appointments.totalAmount) }}</span>
        </p>
      </div>
      <div
          v-if="!appointments.noServiceSelected"
          class="space-y-8">
        <h3 class="text-3xl font-extrabold text-white">Fecha y Hora</h3>

        <div class="lg:flex gap-5 items-start">
          <div class="w-full lg:w-96 flex justify-center rounded-lg">
            <VDatePicker v-model="date" mode="date" />
          </div>
          <div>

          </div>
        </div>
      </div>


    </NuxtLayout>
  </NuxtLayout>
</template>

<style scoped>

</style>