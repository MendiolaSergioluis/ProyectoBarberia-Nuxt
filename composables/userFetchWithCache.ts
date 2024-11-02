export default async <T>(url: string, expirationTime: number = 5 * 60 * 1000) => {
  const nuxtApp = useNuxtApp();
  const {
    data,
    error
  } = await useFetch(url, {
    transform(payload: T){

      return {
        values: payload,
        fetchAt: new Date() as Date
      }
    },
    getCachedData(key: string){
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      // Si no hay data, devolvemos null para que useFetch sepa que no hay data en caché
      if(!data) return null;

      // Si hay data, comprobamos si ha expirado
      const expiration = new Date(data.fetchAt);
      expiration.setTime(expiration.getTime() + expirationTime)
      const isExpired = expiration.getTime() < Date.now();
      // tiempo restante en segundos
      const remainingTime = Math.round((expiration.getTime() - Date.now())/1000);

      // Si ha expirado, devolvemos null, sino devolvemos la data
      if (isExpired) {
        console.log(`Data expirada, volviendo a cargar desde la API: "${url}"`);
        return null;
      } else {
        remainingTime > 60
          ? console.log(`Data cargada desde el caché: "${url}". Expirará en ${Math.round(remainingTime/60)} minutos y ${remainingTime%60} segundos.`)
          : console.log(`Data cargada desde el caché: "${url}". Expirará en ${remainingTime} segundos.`);
        return data;
      }
    }
  })
  // Si hay un error, lanzamos una excepción
  if (error.value) {
    throw createError({
      ...error.value,
      statusCode: 500,
      statusMessage: `No se pudo obtener la data de "${url}"`,
    });
  }

  return data.value?.values as T
};