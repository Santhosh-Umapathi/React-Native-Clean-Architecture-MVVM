import {ProductsRepository} from 'Data/repository';
import {TProduct} from 'types/Product.types';

export default async (id: string, payload: TProduct) => {
  let results, error;
  try {
    results = await ProductsRepository.updateProduct(id, payload);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
