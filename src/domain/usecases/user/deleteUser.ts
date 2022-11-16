import {IUser} from '../../model';

export interface DeleteUserUseCase {
  execute: (id: IUser['id']) => Promise<IUser>;
}
