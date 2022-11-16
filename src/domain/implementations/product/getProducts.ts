import {GetProductsError} from '../../errors';
import {ProductRepository} from '../../repositories';
import {GetProductsUseCase} from '../../usecases';

export class GetProductsImplementation implements GetProductsUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async () => {
    try {
      return await this.productRepository.getProducts();
    } catch (error) {
      throw new GetProductsError();
    }
  };
}
