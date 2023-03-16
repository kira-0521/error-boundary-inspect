import axios from 'axios';
import { Todo } from '../../@types';

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.co/todos');
  return data;
}
