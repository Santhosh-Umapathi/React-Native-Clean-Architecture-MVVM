import {IUser} from '../../model';

export interface GetUserUseCase {
  execute: (id: IUser['id']) => Promise<IUser>;
}
