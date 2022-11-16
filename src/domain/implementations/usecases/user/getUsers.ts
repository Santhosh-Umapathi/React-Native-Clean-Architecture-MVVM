import {GetUsersError} from '../../../errors';
import {UserRepository} from '../../../repositories';
import {GetUsersUseCase} from '../../../usecases';

export class GetUsersImplementation implements GetUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute = async () => {
    try {
      return await this.userRepository.getUsers();
    } catch (error) {
      throw new GetUsersError();
    }
  };
}
