import {atom} from 'recoil';
import {TProducts} from '../../../dtypes/Product.types';

export const products = atom<TProducts>({
  key: 'products',
  default: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
});
