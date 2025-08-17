import { useState } from 'react';
import { TodoType } from './todoTypes';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  // ts 자리

  // 현재 Edit 상태인지 아닌지 파악
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // Edit 상태라면 입력중인 title 내용 관리
  const [editTitle, setEditTitle] = useState<string>(todo.title);

  // 수정은 별도의 입력창 구성으로, 수정 후 값만 업데이트
  const handleEdit = () => {
    // console.log("여기서 내용을 수정하는 기능 작성 후에 완료된 데이터를 전송함")
    setIsEdit(true); // isEdit 을 true 로 변경
  };

  // 수정 후 저장 기능
  const handleEditSave = () => {
    // console.log("수정 완료")
    // 업데이트 해줌 (진행 예정)
    if (editTitle.trim()) {
      // 변경되어야 할 id, 새로운 title 전달
      onEdit(todo.id, editTitle);
      // 상태는 isEdit 을 false로 변경
      setIsEdit(false);
    }
  };

  // 수정중인 내용 취소 기능
  const handleEditCancel = () => {
    // 1. editTitle 을 원래대로 돌리고
    // 상태 false 로 변경
    setIsEdit(false);
  };

  // Enter 키
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log (e.key) : 입력중인 키 알아내기
    if (e.key === 'Enter') {
      handleEditSave();
    }
    if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  // tsx 자리
  return (
    <li className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
      {isEdit ? (
        <div className="flex w-full items-center gap-2 dark:text-neutral-800">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="rounded-md bg-brand px-3 py-1 text-white hover:opacity-90"
            onClick={handleEditSave}
          >
            저장
          </button>
          <button
            className="rounded-md border-neutral-300 px-2 py-1 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
            onClick={handleEditCancel}
          >
            취소
          </button>
        </div>
      ) : (
        <div className="flex w-full items-center gap-3">
          <input
            className="h-4 w-4 accent-brand"
            type="checkbox"
            onChange={() => onToggle(todo.id)}
            checked={todo.completed}
          />
          <span
            className={[
              'flex-1',
              todo.completed
                ? 'text-neutral-400 line-through'
                : 'text-neutral-900 dark:text-neutral-100',
            ].join(' ')}
          >
            {todo.title}
          </span>
          <div className="flex items-center gap-2">
            <button
              className="rounded-md border border-neutral-300 px-3 py-1 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              className="rounded-md border border-red-300 px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => onDelete(todo.id)}
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
