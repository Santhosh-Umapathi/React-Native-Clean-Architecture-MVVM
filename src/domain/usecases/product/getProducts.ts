import {ProductsEntity} from '../../entities';

export interface GetProductsUseCase {
  execute: () => Promise<ProductsEntity>;
}
