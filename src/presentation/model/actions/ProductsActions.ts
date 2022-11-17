import {useRecoilState} from 'recoil';
import {ProductsEntity} from '../../../domain/entities';
import {ProductsState} from '../state';

export default () => {
  const [products, updateProducts] = useRecoilState(ProductsState.products);

  const setProducts = (payload: ProductsEntity) => {
    updateProducts(payload);
  };

  const state = {products};
  const actions = {setProducts};

  return {state, actions};
};
