import { Document } from 'mongoose';
// Types
export type TService = (Document & {
  name: string;
  price: number;
}) | {
  name: string;
  price: number;
}


