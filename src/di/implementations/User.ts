import {HttpManager} from '../../data/network/interfaces/HttpManager';
import {UserRepositoryImpl} from '../../domain/implementations/repositories/UserRepositoryImpl';

export default (Http: HttpManager): UserRepositoryImpl => {
  return new UserRepositoryImpl(Http);
};
