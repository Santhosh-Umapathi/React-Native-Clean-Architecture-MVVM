import {UserEntity} from '../../entities';

export interface GetUserUseCase {
  execute: (id: UserEntity['id']) => Promise<UserEntity>;
}
