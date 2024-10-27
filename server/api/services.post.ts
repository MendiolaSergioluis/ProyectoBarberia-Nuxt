// CREA UN NUEVO SERVICIO
import type {H3Event} from "h3";
import colors from "colors";
import Services from "~/server/models/Services";
import type {TService} from "~/types";

export default defineEventHandler(async (event: H3Event) => {
  // Lee los valores del body
  const body: TService = await readBody(event)

  // Verifica si hay campos vacíos
  if (Object.values(body).includes('')) {
    throw createError({
      statusCode: 400,
      message: "Todos los campos son requeridos"
    })
  }
  // Crea un nuevo registro
  try {
    const service = new Services(body)
    await service.save()
    setResponseStatus(event, 200)
    return {
      message: "El servicio se creó correctamente!"
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(colors.red(` ${error.message}`))
    }
  }
})