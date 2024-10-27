// ELIMINA UN SERVICIO POR ID
import Services from "~/server/models/Services";

export default defineEventHandler(async (event) => {
  const {id} = event.context.params as Record<string, string>;

  // Validar ObjectId
  validateObjectId(id)
  // Validar que el servicio exista
  const service = await Services.findById(id);
  if (!service) {
    handleErrorNotFound('El Servicio no existe.')
  }
  // Eliminar el servicio
  await service!.deleteOne();
  setResponseStatus(event, 200)

  return { message: 'Servicio eliminado correctamente.' };
});