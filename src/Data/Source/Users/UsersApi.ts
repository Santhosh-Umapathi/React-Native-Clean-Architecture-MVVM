import {api} from '@config';
import {TProduct} from './types';

export const getAll = async () => {
  const {data} = await api.get('/products');

  return data;
};

export const getOne = async (id: string) => {
  const {data} = await api.get(`/products/${id}`);

  return data;
};

export const addOne = async (payload: TProduct) => {
  const {data} = await api.post('/products/add', JSON.stringify(payload));

  return data;
};

export const updateOne = async (id: string, payload: TProduct) => {
  const {data} = await api.put(`/products/${id}`, JSON.stringify(payload));

  return data;
};

export const deleteOne = async (id: string) => {
  const {data} = await api.delete(`/products/${id}`);

  return data;
};
