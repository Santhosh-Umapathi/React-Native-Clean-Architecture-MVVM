import {UserEntity} from '../../../entities';
import {DeleteUserError} from '../../../errors';
import {UserRepository} from '../../../repositories';
import {DeleteUserUseCase} from '../../../usecases';

export class DeleteUserImplementation implements DeleteUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async (id: UserEntity['id']) => {
    try {
      return await this.userRepository.deleteUser(id);
    } catch (error) {
      throw new DeleteUserError();
    }
  };
}
