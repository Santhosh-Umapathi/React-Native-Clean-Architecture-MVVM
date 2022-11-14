import {Todo} from '../../../domain/model/Todo';
import TodoDataSource from '../TodoDataSource';
import {TodoAPIEntity} from './entity/TodoApiEntity';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(args, args);
}

export default class TodoApiImpl implements TodoDataSource {
  getTodos = async (): Promise<Todo[]> => {
    let response = await myFetch<TodoAPIEntity[]>(`${BASE_URL}/todos`);
    let data = await response.json();

    return data.map(item => ({
      id: item.id,
      title: item.title,
      isComplete: item.completed,
    }));
  };
}
