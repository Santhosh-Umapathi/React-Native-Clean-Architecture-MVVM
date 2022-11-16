export class GetProductError extends Error {
  constructor() {
    super('Something went wrong while fetching the product');
    this.name = 'GetProductError';
  }
}
