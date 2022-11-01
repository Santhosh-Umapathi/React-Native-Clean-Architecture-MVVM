import {TUser} from 'types/User.types';
import {UsersApi} from 'Data/source';

export const getUsers = async () => {
  return await UsersApi.getAll();
};

export const getUser = async (id: string) => {
  return await UsersApi.getOne(id);
};

export const addUser = async (payload: TUser) => {
  return await UsersApi.addOne(payload);
};

export const updateUser = async (id: string, payload: TUser) => {
  return await UsersApi.updateOne(id, payload);
};

export const deleteUser = async (id: string) => {
  return await UsersApi.deleteOne(id);
};
