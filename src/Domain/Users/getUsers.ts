import {UsersRepository} from '../../Data/repository';

export default async () => {
  let results, error;
  try {
    results = await UsersRepository.getUsers();
  } catch (err) {
    console.log('🔥 --- error', err);
    error = 'Something went wrong';
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
