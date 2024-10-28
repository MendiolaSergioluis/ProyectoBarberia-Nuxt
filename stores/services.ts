import type {TService} from "~/types";

export const useServicesStore = defineStore('serviceStore', () => {
  const services = ref<TService[]>([]);

  onMounted(async () => {

    try {
      setData(await $fetch('/api/services')) // Ignora el error, useFetch no funciona con pinia
    } catch (error) {
      console.log(error)
    }
  })
  const setData = (data: TService[]) => {
    services.value = data;
  }

  return {
    services,
    setData
  };
})