import {useEffect} from 'react';
import TodoApiImpl from '../../../data/source/api/TodoApiImpl';
import GetTodoUseCase from '../../../domain/usecase/Todo/getTodos';
import TProps from './types';

const useHomeViewController = (navigation: TProps['navigation']) => {
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
    navigation.navigate('UsersStack');
  };

  const onProductsPress = () => {
    navigation.navigate('ProductsStack');
  };

  return {onUsersPress, onProductsPress};
};

export default useHomeViewController;
