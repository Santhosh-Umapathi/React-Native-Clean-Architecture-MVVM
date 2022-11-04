import {useRecoilState} from 'recoil';
import {TProducts} from '@type/Product.types';
import {ProductsState} from '../state';

export default () => {
  const [products, updateProducts] = useRecoilState(ProductsState.products);

  const setProducts = (payload: TProducts) => {
    updateProducts(payload);
  };

  const state = {products};
  const actions = {setProducts};

  return {state, actions};
};
