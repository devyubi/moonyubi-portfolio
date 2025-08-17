// type 정의
export type TodoType = { id: string; title: string; completed: boolean };

// interface 정의
export interface ITodoType {
  id: string;
  title: string;
  completed: boolean;
}

// todoItem
export type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

// todoList
export interface TodoListProps {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}
