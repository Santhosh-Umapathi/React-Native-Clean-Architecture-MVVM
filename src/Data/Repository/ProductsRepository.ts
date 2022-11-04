import {ProductsApi} from '../../Data/source';
import {TProduct} from '../../types/Product.types';

export const getProducts = async () => {
  return await ProductsApi.getAll();
};

export const getProduct = async (id: string) => {
  return await ProductsApi.getOne(id);
};

export const addProduct = async (payload: TProduct) => {
  return await ProductsApi.addOne(payload);
};

export const updateProduct = async (id: string, payload: TProduct) => {
  return await ProductsApi.updateOne(id, payload);
};

export const deleteProduct = async (id: string) => {
  return await ProductsApi.deleteOne(id);
};
