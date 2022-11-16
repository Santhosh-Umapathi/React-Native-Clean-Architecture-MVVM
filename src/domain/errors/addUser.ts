export class AddUserError extends Error {
  constructor() {
    super('Something went wrong while adding a new user');
    this.name = 'AddUserError';
  }
}
