import {ProductEntity} from '../../entities';

export interface UpdateProductUseCase {
  execute: (
    id: ProductEntity['id'],
    data: ProductEntity,
  ) => Promise<ProductEntity>;
}
