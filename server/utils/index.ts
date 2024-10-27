import mongoose from "mongoose";

export const validateObjectId = (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError({
      statusCode: 400,
      message: "El ID no es válido",
    })
  }
};
export const handleErrorNotFound = (message: string) => {
  throw createError({
    statusCode: 404,
    message
  })
}