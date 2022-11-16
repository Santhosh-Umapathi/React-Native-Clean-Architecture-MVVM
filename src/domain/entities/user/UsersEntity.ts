import {IUser, IUsers} from '../../model';

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
