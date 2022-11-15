import {TUser, TUsers} from '../../../dtypes/User.types';
import mockUser from './json/mockUser.json';
import mockUsers from './json/mockUsers.json';

export const getAll = async (): Promise<TUsers> => {
  const data: TUsers = await mockUsers;

  return data;
};

export const getOne = async (id: string): Promise<TUser> => {
  console.log('🔥 --- getOne --- id', id);
  const data: TUser = await mockUser;

  return data;
};

export const addOne = async (payload: TUser): Promise<TUser> => {
  console.log('🔥 --- addOne --- payload', payload);
  const data: TUser = await mockUser;

  return data;
};

export const updateOne = async (id: string, payload: TUser): Promise<TUser> => {
  console.log('🔥 --- updateOne --- id', id, payload);
  const data: TUser = await mockUser;

  return data;
};

export const deleteOne = async (id: string): Promise<TUser> => {
  console.log('🔥 --- deleteOne --- id', id);
  const data: TUser = await mockUser;

  return data;
};
