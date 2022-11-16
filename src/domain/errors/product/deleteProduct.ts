export class DeleteProductError extends Error {
  constructor() {
    super('Something went wrong while deleting the product');
    this.name = 'DeleteProductError';
  }
}
