import {HttpManager} from 'src/data/network/interfaces/HttpManager';
import {COLLECTIONS} from '../../../config/apiConfig';
import {ProductEntity} from '../../entities/product/ProductEntity';
import {ProductsEntity} from '../../entities/product/ProductsEntity';
import {
  AddProductError,
  DeleteProductError,
  GetProductError,
  GetProductsError,
  UpdateProductError,
} from '../../errors/product';
import {ProductRepository} from '../../repositories';

export class ProductRepositoryImpl implements ProductRepository {
  private http: HttpManager;

  constructor(http: HttpManager) {
    this.http = http;
  }

  addProduct = async (data: ProductEntity): Promise<ProductEntity> => {
    try {
      const response = await this.http.post(`${COLLECTIONS.product}/add`, data);

      return response;
    } catch (error) {
      throw new AddProductError();
    }
  };

  deleteProduct = async (id: ProductEntity['id']): Promise<ProductEntity> => {
    try {
      const response = await this.http.delete(`${COLLECTIONS.product}/${id}`);
      return response;
    } catch (error) {
      throw new DeleteProductError();
    }
  };

  getProduct = async (id: ProductEntity['id']): Promise<ProductEntity> => {
    try {
      const response = await this.http.get(`${COLLECTIONS.product}/${id}`);
      return response;
    } catch (error) {
      throw new GetProductError();
    }
  };

  getProducts = async (): Promise<ProductsEntity> => {
    try {
      const response = await this.http.get(COLLECTIONS.product);
      return response;
    } catch (error) {
      throw new GetProductsError();
    }
  };

  updateProduct = async (
    id: ProductEntity['id'],
    data: ProductEntity,
  ): Promise<ProductEntity> => {
    try {
      const response = await this.http.put(
        `${COLLECTIONS.product}/${id}`,
        data,
      );
      return response;
    } catch (error) {
      throw new UpdateProductError();
    }
  };
}
