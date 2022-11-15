import {useRecoilState} from 'recoil';
import {TProducts} from 'src/dtypes/Product.types';
import {ProductsState} from '../state';

export default () => {
  const [products, updateProducts] = useRecoilState(ProductsState.products);

  const setProducts = (payload: TProducts) => {
    console.log('🔥 --- setProducts --- payload', payload.products[1]);
    updateProducts(payload);
  };

  const state = {products};
  const actions = {setProducts};

  return {state, actions};
};
