export class GetUsersError extends Error {
  constructor() {
    super('Something went wrong while fetching the users');
    this.name = 'GetUsersError';
  }
}
