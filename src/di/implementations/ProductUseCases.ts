import {
  AddProductImplementation,
  DeleteProductImplementation,
  GetProductImplementation,
  GetProductsImplementation,
  UpdateProductImplementation,
} from '../../domain/implementations/usecases/product';
import {ProductRepository} from '../../domain/repositories/ProductRepository';
import IProductUseCases from '../interfaces/IProductUseCases';

export default (repository: ProductRepository): IProductUseCases => {
  return {
    addProduct: new AddProductImplementation(repository),
    deleteProduct: new DeleteProductImplementation(repository),
    getProduct: new GetProductImplementation(repository),
    getProducts: new GetProductsImplementation(repository),
    updateProduct: new UpdateProductImplementation(repository),
  };
};
