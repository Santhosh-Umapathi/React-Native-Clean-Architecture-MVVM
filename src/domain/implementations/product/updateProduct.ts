import {ProductEntity} from '../../entities';
import {UpdateProductError} from '../../errors';
import {ProductRepository} from '../../repositories';
import {UpdateProductUseCase} from '../../usecases';

export class UpdateProductImplementation implements UpdateProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async (data: ProductEntity) => {
    try {
      return await this.productRepository.updateProduct(data);
    } catch (error) {
      throw new UpdateProductError();
    }
  };
}
