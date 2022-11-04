import {UsersRepository} from '../../Data/repository';
import {TUser} from '../../types/User.types';

export default async (id: string, payload: TUser) => {
  let results, error;
  try {
    results = await UsersRepository.updateUser(id, payload);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
