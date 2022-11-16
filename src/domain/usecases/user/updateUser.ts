import {UserEntity} from '../../entities';

export interface UpdateUserUseCase {
  execute: (id: UserEntity['id'], data: UserEntity) => Promise<UserEntity>;
}
