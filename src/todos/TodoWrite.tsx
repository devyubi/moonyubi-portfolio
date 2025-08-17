import { useState } from 'react';
import { TodoType } from './todoTypes';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

const TodoWrite = ({ setTodos, handleTodoUpdate }: TodoWriteProps) => {
  const [title, setTitle] = useState<string>('');

  // 타이틀 변경시 onChange 이벤트 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 새로운 할 일 등록
  const handleAdd = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return; // 공백 입력 금지

    const newTodo: TodoType = {
      id: Date.now().toString(),
      title: trimmedTitle,
      completed: false,
    };

    // 새로운 할 일 추가
    setTodos(prev => [...prev, newTodo]);
    setTitle(''); // 입력창 비우기
  };

  // 엔터 키 입력 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg ml-1 pb-1">오늘의 할 일</h2>
      <div className="flex gap-3">
        <input
          className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand dark:border-neutral-700 dark:bg-neutral-900"
          type="text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="할 일을 입력하세요"
        />
        <button
          className="rounded-lg bg-brand px-2 py-2 text-white hover:opacity-90 active:opacity-80"
          onClick={handleAdd}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default TodoWrite;
