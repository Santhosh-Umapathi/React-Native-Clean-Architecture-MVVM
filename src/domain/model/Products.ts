import {IProduct} from './Product';

export type IProducts = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};
