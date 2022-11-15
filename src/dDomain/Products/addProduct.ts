import {ProductsRepository} from '../../ddata/repository';
import {TProduct} from '../../dtypes/Product.types';

export default async (payload: TProduct) => {
  let results, error;
  try {
    results = await ProductsRepository.addProduct(payload);
  } catch (err) {
    console.log('🔥 --- error', error);
    if (err instanceof Error) {
      error = err.message;
    }
  }

  return {results, error};
};
