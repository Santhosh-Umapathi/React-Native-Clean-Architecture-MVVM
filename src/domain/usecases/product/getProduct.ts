import {IProduct} from '../../model';

export interface GetProductUseCase {
  execute: (id: IProduct['id']) => Promise<IProduct>;
}
