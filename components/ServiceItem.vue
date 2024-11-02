<script setup lang="ts">
import type {TService} from "~/types";
import {useAppointmentsStore} from "~/stores/appointments";

defineProps<{
  service: TService
}>()
const appointmentsStore = useAppointmentsStore()

</script>

<template>
  <div
      class="p-5 space-y-5 rounded-lg cursor-pointer"
      :class="appointmentsStore.isServiceSelected(service._id as string) ? 'bg-blue-500 text-white' : 'bg-white'"
      @click="appointmentsStore.onServiceSelected(service)"
  >
    <p class="text-2xl font-light">{{ service.name }}</p>
    <p
        class="text-4xl font-black"
        :class="appointmentsStore.isServiceSelected(service._id as string) ? 'text-white' : 'text-blue-600'"
    >{{ formatCurrency(service.price) }}</p>
  </div>
</template>

<style scoped></style>
