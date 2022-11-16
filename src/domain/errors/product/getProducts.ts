export class GetProductsError extends Error {
  constructor() {
    super('Something went wrong while fetching the products');
    this.name = 'GetProductsError';
  }
}
