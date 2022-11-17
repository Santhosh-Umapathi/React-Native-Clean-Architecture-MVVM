import {HttpManager} from '../../data/network/interfaces/HttpManager';
import {ProductRepositoryImpl} from '../../domain/implementations/repositories/ProductRepositoryImpl';

export default (Http: HttpManager): ProductRepositoryImpl => {
  return new ProductRepositoryImpl(Http);
};
