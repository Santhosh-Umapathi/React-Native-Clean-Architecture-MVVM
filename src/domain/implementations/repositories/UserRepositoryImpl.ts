import {HttpManager} from 'src/data/network/interfaces/HttpManager';
import {COLLECTIONS} from '../../../config/apiConfig';
import {UserEntity} from '../../entities/user/UserEntity';
import {UsersEntity} from '../../entities/user/UsersEntity';
import {
  AddUserError,
  DeleteUserError,
  GetUserError,
  GetUsersError,
  UpdateUserError,
} from '../../errors/user';
import {UserRepository} from '../../repositories';

export class UserRepositoryImpl implements UserRepository {
  private http: HttpManager;

  constructor(http: HttpManager) {
    this.http = http;
  }

  addUser = async (data: UserEntity): Promise<UserEntity> => {
    try {
      const response = await this.http.post(COLLECTIONS.user + '/add', data);
      return response;
    } catch (error) {
      throw new AddUserError();
    }
  };

  deleteUser = async (id: UserEntity['id']): Promise<UserEntity> => {
    try {
      const response = await this.http.delete(COLLECTIONS.user + id);
      return response;
    } catch (error) {
      throw new DeleteUserError();
    }
  };

  getUser = async (id: UserEntity['id']): Promise<UserEntity> => {
    try {
      const response = await this.http.get(COLLECTIONS.user + id);
      return response;
    } catch (error) {
      throw new GetUserError();
    }
  };

  getUsers = async (): Promise<UsersEntity> => {
    try {
      const response = await this.http.get(COLLECTIONS.user);
      return response;
    } catch (error) {
      throw new GetUsersError();
    }
  };

  updateUser = async (
    id: UserEntity['id'],
    data: UserEntity,
  ): Promise<UserEntity> => {
    try {
      const response = await this.http.put(COLLECTIONS.user + id, data);
      return response;
    } catch (error) {
      throw new UpdateUserError();
    }
  };
}
