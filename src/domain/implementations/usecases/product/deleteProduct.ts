import {ProductEntity} from '../../../entities';
import {DeleteProductError} from '../../../errors';
import {ProductRepository} from '../../../repositories';
import {DeleteProductUseCase} from '../../../usecases';

export class DeleteProductImplementation implements DeleteProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async (id: ProductEntity['id']) => {
    try {
      return await this.productRepository.deleteProduct(id);
    } catch (error) {
      throw new DeleteProductError();
    }
  };
}
