// OBTENER TODOS LOS SERVICIOS
import Services from "~/server/models/Services";
import colors from "colors";
import {TService} from "~/types";

export default defineEventHandler(async (event) => {
  try {
    const services: TService[] = await Services.find();
    setResponseStatus(event, 200)
    return services;
  } catch (error) {
    if (error instanceof Error) {
      console.log(colors.red(` ${error.message}`))
    }
  }

})