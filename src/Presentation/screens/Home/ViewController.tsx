import {useEffect} from 'react';
import TodoApiImpl from '../../../data/source/api/TodoApiImpl';
import GetTodoUseCase from '../../../domain/usecase/Todo/getTodos';

const useHomeViewController = () => {
  const UseCase = new GetTodoUseCase(new TodoApiImpl());

  const getTodos = async () => {
    try {
      const results = await UseCase.getTodos();
      console.log('🔥 --- getTodos --- results', results);
    } catch (error) {
      console.log('🔥 --- useHomeViewController --- error', error);
    }
  };

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUsersPress = () => {
    console.log('user press');
  };

  const onProductsPress = () => {
    console.log('product press');
  };

  return {onUsersPress, onProductsPress};
};

export default useHomeViewController;
