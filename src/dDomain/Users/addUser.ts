import {UsersRepository} from '../../ddata/repository';
import {TUser} from '../../dtypes/User.types';

export default async (payload: TUser) => {
  let results, error;
  try {
    results = await UsersRepository.addUser(payload);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
