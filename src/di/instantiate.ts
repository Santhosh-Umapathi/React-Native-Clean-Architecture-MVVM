import Http from './implementations/Http';
import Product from './implementations/Product';
import ProductUseCases from './implementations/ProductUseCases';
import User from './implementations/User';
import UserUseCases from './implementations/UserUseCases';

const http = Http();
const product = Product(http);
const user = User(http);
const productUseCases = ProductUseCases(product);
const userUseCases = UserUseCases(user);

export {productUseCases as Product, userUseCases as User};
