/* eslint-disable semi */
import {
  AddUserUseCase,
  DeleteUserUseCase,
  GetUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from '../../domain/usecases/user';

export default interface IUserUseCases {
  addUser: AddUserUseCase;
  deleteUser: DeleteUserUseCase;
  getUser: GetUserUseCase;
  getUsers: GetUsersUseCase;
  updateUser: UpdateUserUseCase;
}
