export class GetUserError extends Error {
  constructor() {
    super('Something went wrong while fetching the user');
    this.name = 'GetUserError';
  }
}
