// ACTUALIZAR SERVICIO POR ID
import Services from "~/server/models/Services";
import colors from "colors";

export default defineEventHandler(async (event) => {
  const {id} = event.context.params as Record<string, any>;
  const body = await readBody(event)

  // Validar ObjectId
  validateObjectId(id)
  // Validar que el servicio exista
  const service = await Services.findById(id);
  if (!service) {
    handleErrorNotFound('El Servicio no existe.')
  }
  // Actualizar el servicio
  // Se reescriben los valores nuevos
  service!.name = body.name || service!.name
  service!.price = body.price || service!.price

  try {
    // Guarda el cambio en el servicio
    await service!.save()
    setResponseStatus(event, 200)
    return {
      message: 'Servicio actualizado correctamente',
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(colors.red(`Error al actualizar el servicio: ${error.message}`))
    }
  }

});