import TodoItem from './TodoItem';
import { TodoType } from './todoTypes';

type TodoListProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoList = ({ todos, onToggle, onDelete, onEdit }: TodoListProps) => {
  return (
    <div>
      <h2 className="p-2 text-xl font-bold">할일 목록</h2>
      {todos.length === 0 ? (
        <p className="p-2 text-neutral-500">목록이 없습니다.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {todos.map((item: TodoType) => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
