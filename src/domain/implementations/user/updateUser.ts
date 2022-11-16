import {UserEntity} from '../../entities';
import {UpdateUserError} from '../../errors';
import {UserRepository} from '../../repositories';
import {UpdateUserUseCase} from '../../usecases';

export class UpdateUserImplementation implements UpdateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async (data: UserEntity) => {
    try {
      return await this.userRepository.updateUser(data);
    } catch (error) {
      throw new UpdateUserError();
    }
  };
}
