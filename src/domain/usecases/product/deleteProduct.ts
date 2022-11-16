import {ProductEntity} from '../../entities';

export interface DeleteProductUseCase {
  execute: (id: ProductEntity['id']) => Promise<ProductEntity>;
}
