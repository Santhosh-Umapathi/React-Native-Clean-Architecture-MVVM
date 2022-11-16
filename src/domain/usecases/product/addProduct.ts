import {ProductEntity} from '../../entities';

export interface AddProductUseCase {
  execute: (data: ProductEntity) => Promise<ProductEntity>;
}
