import {UserEntity} from '../../../entities';
import {UpdateUserError} from '../../../errors';
import {UserRepository} from '../../../repositories';
import {UpdateUserUseCase} from '../../../usecases';

export class UpdateUserImplementation implements UpdateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async (id: UserEntity['id'], data: UserEntity) => {
    try {
      return await this.userRepository.updateUser(id, data);
    } catch (error) {
      throw new UpdateUserError();
    }
  };
}
