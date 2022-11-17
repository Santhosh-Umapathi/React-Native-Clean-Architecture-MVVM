/* eslint-disable semi */
import {
  AddProductUseCase,
  DeleteProductUseCase,
  GetProductsUseCase,
  GetProductUseCase,
  UpdateProductUseCase,
} from '../../domain/usecases/product';

export default interface IProductUseCases {
  addProduct: AddProductUseCase;
  deleteProduct: DeleteProductUseCase;
  getProduct: GetProductUseCase;
  getProducts: GetProductsUseCase;
  updateProduct: UpdateProductUseCase;
}
