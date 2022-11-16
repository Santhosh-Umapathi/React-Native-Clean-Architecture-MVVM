import {ProductEntity, ProductsEntity} from '../entities';

export interface ProductRepository {
  addProduct: (data: ProductEntity) => Promise<ProductEntity>;
  deleteProduct: (id: ProductEntity['id']) => Promise<ProductEntity>;
  getProduct: (id: ProductEntity['id']) => Promise<ProductEntity>;
  getProducts: () => Promise<ProductsEntity>;
  updateProduct: (data: ProductEntity) => Promise<ProductEntity>;
}
