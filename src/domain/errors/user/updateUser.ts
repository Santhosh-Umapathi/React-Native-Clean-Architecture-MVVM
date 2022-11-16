export class UpdateUserError extends Error {
  constructor() {
    super('Something went wrong while updating the user');
    this.name = 'UpdateUserError';
  }
}
