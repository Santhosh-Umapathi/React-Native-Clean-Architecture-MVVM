import {IUser} from './User';

export type IUsers = {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
};
