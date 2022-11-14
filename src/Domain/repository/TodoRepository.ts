/* eslint-disable semi */
import {Todo} from '../model/Todo';

export default interface TodoRepository {
  getTodos: () => Promise<Todo[]>;
}
