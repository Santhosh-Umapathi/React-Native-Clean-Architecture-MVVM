import {UserEntity} from '../../entities';

export interface DeleteUserUseCase {
  execute: (id: UserEntity['id']) => Promise<UserEntity>;
}
