import {IUser} from '../../model';

export interface AddUserUseCase {
  execute: (data: IUser) => Promise<IUser>;
}
