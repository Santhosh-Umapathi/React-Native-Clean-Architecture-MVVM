import {ProductEntity} from '../../entities';

export interface UpdateProductUseCase {
  execute: (data: ProductEntity) => Promise<ProductEntity>;
}
