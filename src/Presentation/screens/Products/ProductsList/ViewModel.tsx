import {TProducts} from '@type/Product.types';
import {actions as Actions} from '../../../model';

const useProductsListViewModel = () => {
  const {state, actions} = Actions.ProductsActions();

  const updateProducts = (payload: TProducts) => {
    actions.setProducts(payload);
  };

  return {products: state.products, updateProducts};
};

export default useProductsListViewModel;
