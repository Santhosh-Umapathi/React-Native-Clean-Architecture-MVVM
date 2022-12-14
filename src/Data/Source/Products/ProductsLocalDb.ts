import {TProduct, TProducts} from '../../../types/Product.types';
import ProductDb from './json/Product.json';
import ProductsDb from './json/Products.json';

export const getAll = async (): Promise<TProducts> => {
  const data: TProducts = await ProductsDb;

  return data;
};

export const getOne = async (id: string): Promise<TProduct> => {
  console.log('🔥 --- getOne --- id', id);
  const data: TProduct = await ProductDb;

  return data;
};

export const addOne = async (payload: TProduct): Promise<TProduct> => {
  console.log('🔥 --- addOne --- payload', payload);
  const data: TProduct = await ProductDb;

  return data;
};

export const updateOne = async (
  id: string,
  payload: TProduct,
): Promise<TProduct> => {
  console.log('🔥 --- updateOne --- id', id, payload);
  const data: TProduct = await ProductDb;

  return data;
};

export const deleteOne = async (id: string): Promise<TProduct> => {
  console.log('🔥 --- deleteOne --- id', id);
  const data: TProduct = await ProductDb;

  return data;
};
