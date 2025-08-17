import { useEffect, useState } from 'react';
import TodoWrite from '../todos/TodoWrite';
import { TodoType } from '../todos/todoTypes';
import TodoList from '../todos/TodoList';

const MainPage = () => {
  // 1. 로컬스토리지에서 초기 todos 불러오기
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. todos가 바뀔 때마다 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 할 일 완료/취소 토글
  const handleToggle = (id: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  // 할 일 삭제
  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // 할 일 수정
  const handleEdit = (id: string, newTitle: string) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo)));
  };

  const handleTodoUpdate = (newTodo: TodoType) => {
    setTodos(prev => prev.map(todo => (todo.id === newTodo.id ? newTodo : todo)));
  };
  return (
    <div className="px-20 py-2 bg-white text-black dark:bg-gray-600 dark:text-white">
      <main>메인 콘텐츠</main>
      <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default MainPage;
