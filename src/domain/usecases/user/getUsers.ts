import {IUsers} from '../../model';

export interface GetUsersUseCase {
  execute: () => Promise<IUsers>;
}
