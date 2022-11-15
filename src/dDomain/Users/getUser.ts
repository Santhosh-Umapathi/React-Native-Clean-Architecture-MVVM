import {UsersRepository} from '../../ddata/repository';

export default async (id: string) => {
  let results, error;
  try {
    results = await UsersRepository.getUser(id);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
