import {IProduct, IProducts} from '../../model';

export class ProductsEntity implements IProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;

  constructor(
    products: IProduct[],
    total: number,
    skip: number,
    limit: number,
  ) {
    this.products = products;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }

  static create = (
    products: IProduct[],
    total: number,
    skip: number,
    limit: number,
  ) => {
    return new ProductsEntity(products, total, skip, limit);
  };
}
