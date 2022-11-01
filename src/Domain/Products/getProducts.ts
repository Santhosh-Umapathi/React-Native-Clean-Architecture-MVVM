import {ProductsRepository} from 'Data/repository';

export default async () => {
  let results, error;
  try {
    results = await ProductsRepository.getProducts();
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
