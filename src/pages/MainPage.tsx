import { useState } from 'react';
import TodoWrite from '../todos/TodoWrite';
import { TodoType } from '../todos/todoTypes';

const MainPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTodoUpdate = (newTodo: TodoType) => {
    setTodos(prev => prev.map(todo => (todo.id === newTodo.id ? newTodo : todo)));
  };
  return (
    <div className="px-20 py-2 bg-white text-black dark:bg-gray-600 dark:text-white">
      <main>메인 콘텐츠</main>
      <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
    </div>
  );
};

export default MainPage;
