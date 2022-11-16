import {IProduct} from '../../model';

export interface UpdateProductUseCase {
  execute: (data: IProduct) => Promise<IProduct>;
}
