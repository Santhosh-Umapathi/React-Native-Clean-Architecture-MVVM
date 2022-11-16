import {IProduct, IProducts} from '../model';

export interface ProductRepository {
  addProduct: (data: IProduct) => Promise<IProduct>;
  deleteProduct: (id: IProduct['id']) => Promise<IProduct>;
  getProduct: (id: IProduct['id']) => Promise<IProduct>;
  getProducts: () => Promise<IProducts>;
  updateProduct: (data: IProduct) => Promise<IProduct>;
}
