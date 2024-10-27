import mongoose from 'mongoose';
import colors from 'colors'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();
  try {
    const db = await mongoose.connect(config.MONGO_URI)
    const url = `${db.connection.host}:${db.connection.port}/${db.connection.name}`
    console.log(colors.green(`Conectado a MongoDB: ${url}`))
  } catch (error) {
    if (error instanceof Error) {
      console.log(colors.red(`Error al conectar a MongoDB: ${error.message}`))
      process.exit(1)
    }
  }
});