import {IUser, IUsers} from '../model';

export interface UserRepository {
  addUser: (data: IUser) => Promise<IUser>;
  deleteUser: (id: IUser['id']) => Promise<IUser>;
  getUser: (id: IUser['id']) => Promise<IUser>;
  getUsers: () => Promise<IUsers>;
  updateUser: (data: IUser) => Promise<IUser>;
}
