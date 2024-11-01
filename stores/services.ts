import type {TService} from "~/types";

export const useServicesStore = defineStore('serviceStore', () => {
  const services = ref<TService[]>([]);
  const overwriteServices = (data: TService[]) => {
    services.value = data;
  }

  return {
    services,
    overwriteServices
  };
})