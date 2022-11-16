import {ProductEntity} from '../../../entities';
import {UpdateProductError} from '../../../errors';
import {ProductRepository} from '../../../repositories';
import {UpdateProductUseCase} from '../../../usecases';

export class UpdateProductImplementation implements UpdateProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async (id: ProductEntity['id'], data: ProductEntity) => {
    try {
      return await this.productRepository.updateProduct(id, data);
    } catch (error) {
      throw new UpdateProductError();
    }
  };
}
