import {UserEntity, UsersEntity} from '../entities';

export interface UserRepository {
  addUser: (data: UserEntity) => Promise<UserEntity>;
  deleteUser: (id: UserEntity['id']) => Promise<UserEntity>;
  getUser: (id: UserEntity['id']) => Promise<UserEntity>;
  getUsers: () => Promise<UsersEntity>;
  updateUser: (data: UserEntity) => Promise<UserEntity>;
}
