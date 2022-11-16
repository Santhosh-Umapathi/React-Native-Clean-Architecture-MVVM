import {ProductEntity} from '../../../entities';
import {GetProductError} from '../../../errors';
import {ProductRepository} from '../../../repositories';
import {GetProductUseCase} from '../../../usecases';

export class GetProductImplementation implements GetProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async (id: ProductEntity['id']) => {
    try {
      return await this.productRepository.getProduct(id);
    } catch (error) {
      throw new GetProductError();
    }
  };
}
