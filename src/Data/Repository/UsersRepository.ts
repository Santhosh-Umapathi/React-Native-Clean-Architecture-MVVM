import {UsersApi} from 'Data/source';
import {TUser} from 'Data/types/User.types';

export const getProducts = async () => {
  return await UsersApi.getAll();
};

export const getProduct = async (id: string) => {
  return await UsersApi.getOne(id);
};

export const addProduct = async (payload: TUser) => {
  return await UsersApi.addOne(payload);
};

export const updateProduct = async (id: string, payload: TUser) => {
  return await UsersApi.updateOne(id, payload);
};

export const deleteProduct = async (id: string) => {
  return await UsersApi.deleteOne(id);
};
