import {TProduct, TProducts} from '@type/Product.types';
import {actions as Actions} from '../../../model';

const useAddProductViewModel = () => {
  const {state, actions} = Actions.ProductsActions();

  const updateProducts = (payload: TProducts) => {
    actions.setProducts(payload);
  };

  const addProductHandler = (payload: TProduct) => {
    actions.setProducts({
      ...state.products,
      products: [payload, ...state.products.products],
    });
  };

  const editProductHandler = (payload: TProduct) => {
    const oldState = [...state.products.products];
    const index = oldState.findIndex(i => String(i.id) === payload.id);

    oldState[index] = payload;

    actions.setProducts({...state.products, products: oldState});
  };

  const deleteProductHandler = (payload: TProduct) => {
    const oldState = [...state.products.products];
    const index = oldState.findIndex(i => String(i.id) === payload.id);
    oldState.splice(index, 1);

    actions.setProducts({...state.products, products: oldState});
  };

  return {
    products: state.products,
    updateProducts,
    addProductHandler,
    editProductHandler,
    deleteProductHandler,
  };
};

export default useAddProductViewModel;
