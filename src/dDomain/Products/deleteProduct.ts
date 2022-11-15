import {ProductsRepository} from '../../ddata/repository';

export default async (id: string) => {
  let results, error;
  try {
    results = await ProductsRepository.deleteProduct(id);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
