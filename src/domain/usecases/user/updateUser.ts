import {IUser} from '../../model';

export interface UpdateUserUseCase {
  execute: (data: IUser) => Promise<IUser>;
}
