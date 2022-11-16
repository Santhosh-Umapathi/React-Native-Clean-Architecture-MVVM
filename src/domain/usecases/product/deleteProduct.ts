import {IProduct} from '../../model';

export interface DeleteProductUseCase {
  execute: (id: IProduct['id']) => Promise<IProduct>;
}
