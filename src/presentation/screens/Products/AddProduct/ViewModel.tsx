import {
  ProductEntity,
  ProductsEntity,
} from '../../../../domain/entities/product';
import {actions as Actions} from '../../../model';

const useAddProductViewModel = () => {
  const {state, actions} = Actions.ProductsActions();

  const updateProducts = (payload: ProductsEntity) => {
    actions.setProducts(payload);
  };

  const addProductHandler = (payload: ProductEntity) => {
    actions.setProducts({
      ...state.products,
      products: [payload, ...state.products.products],
    });
  };

  const editProductHandler = (payload: ProductEntity) => {
    const oldState = [...state.products.products];
    const index = oldState.findIndex(i => payload.id && i.id === +payload.id);

    oldState[index] = payload;

    actions.setProducts({...state.products, products: oldState});
  };

  const deleteProductHandler = (payload: ProductEntity) => {
    const oldState = [...state.products.products];
    const index = oldState.findIndex(i => i.id === payload.id);
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
