import {atom} from 'recoil';
import {ProductsEntity} from '../../../domain/entities';

export const products = atom<ProductsEntity>({
  key: 'products',
  default: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
});
