import {UserEntity} from '../../entities';

export interface AddUserUseCase {
  execute: (data: UserEntity) => Promise<UserEntity>;
}
