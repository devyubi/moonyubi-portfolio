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

  // 새 할일 등록
  const handleAdd = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return; // 공백 입력 금지

    const newTodo: TodoType = {
      id: Date.now().toString(),
      title: trimmedTitle,
      completed: false,
    };

    handleTodoUpdate(newTodo); // 부모 state에 전달
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
      <h2 className="font-bold text-lg ml-1">오늘의 할 일</h2>
      <input
        className="border p-1 rounded-lg m-1 dark:text-black"
        type="text"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button className="border p-1 rounded-lg ml-2" onClick={handleAdd}>
        등록
      </button>
    </div>
  );
};

export default TodoWrite;
