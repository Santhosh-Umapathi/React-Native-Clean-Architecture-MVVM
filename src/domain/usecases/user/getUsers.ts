import {UsersEntity} from '../../entities';

export interface GetUsersUseCase {
  execute: () => Promise<UsersEntity>;
}
