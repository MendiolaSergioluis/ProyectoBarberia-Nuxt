import type {TService} from "~/types";

export const useAppointmentsStore = defineStore('appointments', () => {

  const services = ref<TService[]>([]);

  function onServiceSelected(service: TService) {
    if(services.value.some(selectedService => selectedService._id === service._id)) {
      services.value = services.value.filter(selectedService => selectedService._id !== service._id);
      console.log(`"${service.name}" eliminado de la cita`)
    } else {
      if(services.value.length === 2 ) {
        alert('Solo puedes seleccionar 2 servicios')
        return
      }
      services.value.push(service);
      console.log(`Agregado "${service.name}" a la cita`)
    }
  }

  const isServiceSelected = computed(() => {
    return (id: string): boolean => services.value.some(service => service._id === id)
  })

  const noServiceSelected = computed((): boolean => services.value.length === 0)

  const totalAmount = computed(() : number => {
    return services.value.reduce((total: number, service: TService) => total + service.price, 0)
  })
  return {
    services,
    isServiceSelected,
    onServiceSelected,
    noServiceSelected,
    totalAmount
  }
})