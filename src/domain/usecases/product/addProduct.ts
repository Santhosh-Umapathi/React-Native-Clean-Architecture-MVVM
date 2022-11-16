import {IProduct} from '../../model';

export interface AddProductUseCase {
  execute: (data: IProduct) => Promise<IProduct>;
}
