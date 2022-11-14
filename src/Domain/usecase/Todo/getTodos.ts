import TodoDataSource from 'src/data/source/TodoDataSource';
import {Todo} from '../../model/Todo';
import TodoRepository from '../../repository/TodoRepository';

export default class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_datasource: TodoDataSource) {
    this.dataSource = _datasource;
  }
  getTodos = async (): Promise<Todo[]> => {
    return this.dataSource.getTodos();
  };
}
