import {
  AddUserImplementation,
  DeleteUserImplementation,
  GetUserImplementation,
  GetUsersImplementation,
  UpdateUserImplementation,
} from '../../domain/implementations/usecases/user';
import {UserRepository} from '../../domain/repositories/UserRepository';
import IUserUseCases from '../interfaces/IUserUseCases';

export default (repository: UserRepository): IUserUseCases => {
  return {
    addUser: new AddUserImplementation(repository),
    deleteUser: new DeleteUserImplementation(repository),
    getUser: new GetUserImplementation(repository),
    getUsers: new GetUsersImplementation(repository),
    updateUser: new UpdateUserImplementation(repository),
  };
};
