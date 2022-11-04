import {api} from '@config';
import {TProduct, TProducts} from '../../../types/Product.types';
import {COLLECTION} from './constants';

export const getAll = async (): Promise<TProducts> => {
  const {data}: {data: TProducts} = await api.get(`/${COLLECTION}`);

  return data;
};

export const getOne = async (id: string): Promise<TProduct> => {
  const {data}: {data: TProduct} = await api.get(`/${COLLECTION}/${id}`);

  return data;
};

export const addOne = async (payload: TProduct): Promise<TProduct> => {
  const {data}: {data: TProduct} = await api.post(
    `/${COLLECTION}/add`,
    JSON.stringify(payload),
  );

  return payload;
};

export const updateOne = async (
  id: string,
  payload: TProduct,
): Promise<TProduct> => {
  const {data}: {data: TProduct} = await api.put(
    `/${COLLECTION}/${id}`,
    JSON.stringify(payload),
  );

  return payload;
};

export const deleteOne = async (id: string): Promise<TProduct> => {
  const {data}: {data: TProduct} = await api.delete(`/${COLLECTION}/${id}`);

  return data;
};
