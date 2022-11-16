export class AddProductError extends Error {
  constructor() {
    super('Something went wrong while adding a new product');
    this.name = 'AddProductError';
  }
}
