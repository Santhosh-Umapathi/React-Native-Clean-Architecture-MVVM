export class DeleteUserError extends Error {
  constructor() {
    super('Something went wrong while deleting the user');
    this.name = 'DeleteUserError';
  }
}
