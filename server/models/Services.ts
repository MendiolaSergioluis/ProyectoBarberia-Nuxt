import mongoose from "mongoose";
import type {Schema, Model} from "mongoose";
import type {TService} from "~/types";

const servicesSchema: Schema = new mongoose.Schema<TService>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  }
})

const Services: Model<TService> = mongoose.model<TService>('Services', servicesSchema)

export default Services