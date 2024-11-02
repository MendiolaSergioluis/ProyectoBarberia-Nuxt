import {Document} from 'mongoose';
// Types
export type TService = (Document & {
  name: string;
  price: number;
}) | {
  _id?: string;
  name: string;
  price: number;
  __v?: number;
}


