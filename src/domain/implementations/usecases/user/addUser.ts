import {UserEntity} from '../../../entities';
import {AddUserError} from '../../../errors';
import {UserRepository} from '../../../repositories';
import {AddUserUseCase} from '../../../usecases';

export class AddUserImplementation implements AddUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async (data: UserEntity) => {
    try {
      return await this.userRepository.addUser(data);
    } catch (error) {
      throw new AddUserError();
    }
  };
}
