import {ProductEntity} from '../../entities';

export interface GetProductUseCase {
  execute: (id: ProductEntity['id']) => Promise<ProductEntity>;
}
