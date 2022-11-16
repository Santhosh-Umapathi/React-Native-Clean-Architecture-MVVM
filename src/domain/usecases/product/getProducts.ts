import {IProducts} from '../../model';

export interface GetProductsUseCase {
  execute: () => Promise<IProducts>;
}
