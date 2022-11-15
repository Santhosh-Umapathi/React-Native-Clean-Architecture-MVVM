import {TProducts} from 'src/dtypes/Product.types';
import {actions as Actions} from '../../../model';

const useProductsListViewModel = () => {
  const {state, actions} = Actions.ProductsActions();
  const UsersAtoms = Actions.UsersActions();

  const updateProducts = (payload: TProducts) => {
    actions.setProducts(payload);
  };

  return {
    products: state.products,
    updateProducts,
    users: UsersAtoms.state.users.users,
  };
};

export default useProductsListViewModel;
