import {ProductEntity} from '../../entities';
import {AddProductError} from '../../errors';
import {ProductRepository} from '../../repositories';
import {AddProductUseCase} from '../../usecases';

export class AddProductImplementation implements AddProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute = async (data: ProductEntity) => {
    try {
      return await this.productRepository.addProduct(data);
    } catch (error) {
      throw new AddProductError();
    }
  };
}
