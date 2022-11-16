import {UserEntity} from '../../entities';
import {GetUserError} from '../../errors';
import {UserRepository} from '../../repositories';
import {GetUserUseCase} from '../../usecases';

export class GetUserImplementation implements GetUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async (id: UserEntity['id']) => {
    try {
      return await this.userRepository.getUser(id);
    } catch (error) {
      throw new GetUserError();
    }
  };
}
