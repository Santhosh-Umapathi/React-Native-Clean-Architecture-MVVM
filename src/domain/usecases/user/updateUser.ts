import {UserEntity} from '../../entities';

export interface UpdateUserUseCase {
  execute: (data: UserEntity) => Promise<UserEntity>;
}
