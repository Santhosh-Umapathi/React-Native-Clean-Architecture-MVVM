import {IUser} from '../model/User';
import {IUsers} from '../model/Users';

export class UsersEntity implements IUsers {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;

  constructor(users: IUser[], total: number, skip: number, limit: number) {
    this.users = users;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }

  static create = (
    users: IUser[],
    total: number,
    skip: number,
    limit: number,
  ) => {
    return new UsersEntity(users, total, skip, limit);
  };
}
