import {api} from '@config';
import {COLLECTION} from './constants';
import {TUser, TUsers} from './types';

export const getAll = async (): Promise<TUsers> => {
  const {data}: {data: TUsers} = await api.get(`/${COLLECTION}`);

  return data;
};

export const getOne = async (id: string): Promise<TUser> => {
  const {data}: {data: TUser} = await api.get(`/${COLLECTION}/${id}`);

  return data;
};

export const addOne = async (payload: TUser): Promise<TUser> => {
  const {data}: {data: TUser} = await api.post(
    `/${COLLECTION}/add`,
    JSON.stringify(payload),
  );

  return data;
};

export const updateOne = async (id: string, payload: TUser): Promise<TUser> => {
  const {data}: {data: TUser} = await api.put(
    `/${COLLECTION}/${id}`,
    JSON.stringify(payload),
  );

  return data;
};

export const deleteOne = async (id: string): Promise<TUser> => {
  const {data}: {data: TUser} = await api.delete(`/${COLLECTION}/${id}`);

  return data;
};
