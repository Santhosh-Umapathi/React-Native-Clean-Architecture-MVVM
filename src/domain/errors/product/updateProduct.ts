export class UpdateProductError extends Error {
  constructor() {
    super('Something went wrong while updating the product');
    this.name = 'UpdateProductError';
  }
}
